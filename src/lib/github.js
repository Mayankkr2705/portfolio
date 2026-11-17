import { personalInfo } from "./data";

const GITHUB_API = "https://api.github.com";

const selectedRepositories = [
  {
    name: "comicbook-main",
    title: "ComicBook",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "GreatWear",
    title: "GreatWear",
    tech: ["React", "Node.js", "Firebase", "Cloudinary"],
  },
  {
    name: "AI-DOCTOR",
    title: "MediCare AI",
    tech: ["React", "Node.js", "Groq AI", "MongoDB"],
    images: [
      "/medicare%20ai/m1.png",
      "/medicare%20ai/m2.png",
      "/medicare%20ai/m3.png",
      "/medicare%20ai/m4.png",
    ],
  },
  {
    name: "Student-Drop-Prediction-SIH",
    title: "Mentor Signal",
    tech: ["FastAPI", "Python", "Scikit-learn", "Vercel"],
    images: ["/mentorSignal/MentorSignal.png"],
  },
];

selectedRepositories[0].images = [
  "/Comic/c1%20(1).png",
  "/Comic/c1%20(2).png",
  "/Comic/c1%20(3).png",
  "/Comic/c1%20(4).png",
];
selectedRepositories[1].images = [
  "/greatWEAR/GreatWear.png",
  "/greatWEAR/GreatWear%20DashBoard.png",
  "/greatWEAR/Screenshot%202026-11-12%20213449.png",
  "/greatWEAR/Screenshot%202026-11-12%20213513.png",
];

function getGithubUsername() {
  return personalInfo.github.split("/").filter(Boolean).pop();
}

function getHeaders() {
  return {
    Accept: "application/vnd.github+json",
    ...(process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : {}),
  };
}

function getReadmeImage(readme, repository) {
  if (!readme?.content) return null;

  const markdown = Buffer.from(
    readme.content.replace(/\s/g, ""),
    "base64",
  ).toString("utf8");
  const imageMatches = [
    ...markdown.matchAll(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g),
  ];
  const image = imageMatches.find((match) =>
    /\.(png|jpe?g|gif|webp)(\?|$)/i.test(match[1]),
  )?.[1];

  if (!image) return null;
  if (image.startsWith("http")) return image;

  return `https://raw.githubusercontent.com/${repository.full_name}/${repository.default_branch}/${image.replace(/^\.?\//, "")}`;
}

function toProject(repository, config, readme) {
  const image = getReadmeImage(readme, repository);

  if (!image) {
    console.warn(
      `No README preview image found for ${repository.full_name}; using GitHub preview.`,
    );
  }

  return {
    title: config.title,
    description:
      repository.description ||
      "A project built with modern web technologies and maintained on GitHub.",
    image:
      image || `https://opengraph.githubassets.com/1/${repository.full_name}`,
    localImages: config.images || [],
    language: repository.language,
    tech: config.tech,
    topics: repository.topics || [],
    stars: repository.stargazers_count,
    links: {
      github: repository.html_url,
      live: repository.homepage || null,
    },
  };
}

async function getRepository(username, config) {
  const repositoryResponse = await fetch(
    `${GITHUB_API}/repos/${username}/${encodeURIComponent(config.name)}`,
    { headers: getHeaders(), next: { revalidate: 3600 } },
  );

  if (!repositoryResponse.ok) {
    throw new Error(
      `GitHub repository request failed for ${config.name} (${repositoryResponse.status})`,
    );
  }

  const repository = await repositoryResponse.json();
  const readmeResponse = await fetch(
    `${GITHUB_API}/repos/${username}/${encodeURIComponent(config.name)}/readme`,
    { headers: getHeaders(), next: { revalidate: 3600 } },
  );
  const readme = readmeResponse.ok ? await readmeResponse.json() : null;

  return toProject(repository, config, readme);
}

export async function getGithubProjects(fallbackProjects = []) {
  const username = getGithubUsername();

  try {
    const projects = await Promise.all(
      selectedRepositories.map((repository) =>
        getRepository(username, repository),
      ),
    );

    return projects;
  } catch (error) {
    console.error("Unable to load selected GitHub projects:", error);
    return fallbackProjects;
  }
}

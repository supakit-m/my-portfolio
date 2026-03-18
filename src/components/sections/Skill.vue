<!-- TECH STACK SECTION -->
<template>
  <div>
    <header class="mb-3">
      <h2 class="text-4xl font-bold mb-0">
        My <span class="text-primary">Skills</span>
      </h2>
      <!-- <p class="text-secondary max-w-xl">
      </p> -->
    </header>
    <div class="flex flex-col z-10 rounded-3xl bg-bg-primary">
      <!-- FRONTEND -->
      <div
        class="bg-bg-primary p-5 rounded-3xl flex md:flex-row flex-col gap-8 items-start"
      >
        <!-- Label -->
        <div
          class="w-full md:w-1/5 text-brand text-lg font-bold sticky top-18"
        >
          <div class="">FRONTEND</div>
        </div>

        <!-- Tech Grid -->
        <div
          class="bg-bg-secondary p-4 rounded-2xl w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
        >
          <!-- Tech Icons Here -->
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">JavaScript</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">TypeScript</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://devicon-website.vercel.app/api/vuejs/original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Vue</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              class="w-6 h-6"
            />
            <span class="text-lg">Tailwind CSS</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">HTML</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              class="w-6 h-6"
            />
            <span class="text-lg">CSS</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://devicon-website.vercel.app/api/php/original.svg"
              class="w-6 h-6 scale-140"
            /><span class="text-lg">PHP</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              class="w-6 h-6 scale-120"
            >
              <path
                fill="#9575cd"
                d="M44.86,9.976L25.023,45.448c-0.41,0.732-1.462,0.737-1.878,0.008L2.915,9.979 C2.462,9.185,3.141,8.223,4.041,8.384l19.859,3.55c0.127,0.023,0.256,0.022,0.383-0.001l19.443-3.544 C44.623,8.225,45.305,9.18,44.86,9.976z"
              ></path>
              <path
                fill="#fbc02d"
                d="M33.574,3.01L19.019,5.862c-0.239,0.047-0.416,0.25-0.431,0.493l-0.895,15.121 c-0.021,0.356,0.306,0.633,0.654,0.552l4.052-0.935c0.379-0.087,0.722,0.246,0.644,0.628l-1.204,5.895 c-0.081,0.397,0.291,0.736,0.679,0.618l2.503-0.76c0.388-0.118,0.761,0.222,0.679,0.62l-1.913,9.26 c-0.12,0.579,0.651,0.895,0.972,0.398l0.215-0.332l11.86-23.669c0.199-0.396-0.144-0.848-0.579-0.764l-4.171,0.805 c-0.392,0.076-0.725-0.289-0.615-0.673l2.722-9.438C34.301,3.299,33.967,2.933,33.574,3.01z"
              ></path>
            </svg>
            <span class="text-lg">Vite</span>
          </div>
        </div>
      </div>

      <!-- BACKEND -->
      <div
        class="border-3 border-bg-primary bg-brand p-5 rounded-3xl flex md:flex-row flex-col gap-8 items-start"
        id="backend"
      >
        <div
          class="w-full md:w-1/5 text-primary text-lg font-bold sticky top-18"
        >
          <div class="">BACKEND</div>
        </div>
        <div
          class="bg-bg-secondary p-4 rounded-2xl w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
        >
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Python</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
              class="w-6 h-6 bg-white rounded p-0.5"
            /><span class="text-lg">Flask</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
              class="w-6 h-6 bg-white rounded p-0.5"
            /><span class="text-lg">Django</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">FastAPI</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Node.js</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              class="w-6 h-6 bg-white rounded p-0.5"
            /><span class="text-lg">Express.js</span>
          </div>
        </div>
      </div>

      <!-- DATABASE -->
      <div
        class="bg-bg-primary p-5 rounded-3xl flex md:flex-row flex-col gap-8 items-start"
        id="database"
      >
        <div
          class="w-full md:w-1/5 text-brand text-lg font-bold sticky top-18"
        >
          <div class="">DATABASE</div>
        </div>
        <div
          class="bg-bg-secondary p-4 rounded-2xl w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
        >
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">MongoDB</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">MySQL</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">PostgreSQL</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Redis</span>
          </div>
        </div>
      </div>

      <!-- TOOLS -->
      <div
        class="border-3 border-bg-primary bg-brand p-5 rounded-3xl flex md:flex-row flex-col gap-8 items-start"
        id="tools"
      >
        <div
          class="w-full md:w-1/5 text-primary text-lg font-bold sticky top-18"
        >
          <div class="">TOOLS</div>
        </div>
        <div
          class="bg-bg-secondary p-4 rounded-2xl w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
        >
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              class="w-6 h-6"
            /><span class="text-lg">AWS</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Docker</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Git</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
              class="w-6 h-6"
            /><span class="text-lg">Kubernetes</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Jenkins</span>
          </div>
          <div
            class="bg-bg-tertiary p-2 rounded-lg shadow-lg flex items-center gap-2"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
              class="w-6 h-6"
            /><span class="text-lg">Nginx</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

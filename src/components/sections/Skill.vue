<!-- TECH STACK SECTION -->
<template
  id="tech-stack"
  class="bg-black text-white py-20 px-6 relative overflow-hidden"
>
  <div class="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
    <!-- FRONTEND -->
    <div class="flex md:flex-row flex-col gap-8 items-start" id="frontend">
      <!-- Label -->
      <div
        class="w-full md:w-1/5 text-gray-400 text-lg font-bold sticky top-18"
      >
        <div
          class="category-label cursor-pointer hover:text-white transition"
          onclick="
            document
              .querySelector('#frontend')
              .scrollIntoView({ behavior: 'smooth' })
          "
        >
          FRONTEND
        </div>
      </div>

      <!-- Tech Grid -->
      <div
        class="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
      >
        <!-- Tech Icons Here -->
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">JavaScript</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">TypeScript</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">React</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            class="w-6 h-6"
          />
          <span class="text-lg">Tailwind CSS</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">HTML</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            class="w-6 h-6"
          />
          <span class="text-lg">CSS</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            class="w-6 h-6 bg-white rounded-full p-0.5"
          /><span class="text-lg">Next.js</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Three.js</span>
        </div>
      </div>
    </div>

    <!-- BACKEND -->
    <div class="flex md:flex-row flex-col gap-8 items-start" id="backend">
      <div
        class="w-full md:w-1/5 text-gray-400 text-lg font-bold sticky top-18"
      >
        <div
          class="category-label cursor-pointer hover:text-white transition"
          onclick="
            document
              .querySelector('#backend')
              .scrollIntoView({ behavior: 'smooth' })
          "
        >
          BACKEND
        </div>
      </div>
      <div
        class="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
      >
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Python</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
            class="w-6 h-6 bg-white rounded p-0.5"
          /><span class="text-lg">Flask</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
            class="w-6 h-6 bg-white rounded p-0.5"
          /><span class="text-lg">Django</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">FastAPI</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Node.js</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            class="w-6 h-6 bg-white rounded p-0.5"
          /><span class="text-lg">Express.js</span>
        </div>
      </div>
    </div>

    <!-- DATABASE -->
    <div class="flex md:flex-row flex-col gap-8 items-start" id="database">
      <div
        class="w-full md:w-1/5 text-gray-400 text-lg font-bold sticky top-18"
      >
        <div
          class="category-label cursor-pointer hover:text-white transition"
          onclick="
            document
              .querySelector('#database')
              .scrollIntoView({ behavior: 'smooth' })
          "
        >
          DATABASE
        </div>
      </div>
      <div
        class="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
      >
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">MongoDB</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">MySQL</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">PostgreSQL</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Redis</span>
        </div>
      </div>
    </div>

    <!-- TOOLS -->
    <div class="flex md:flex-row flex-col gap-8 items-start" id="tools">
      <div
        class="w-full md:w-1/5 text-gray-400 text-lg font-bold sticky top-18"
      >
        <div
          class="category-label cursor-pointer hover:text-white transition"
          onclick="
            document
              .querySelector('#tools')
              .scrollIntoView({ behavior: 'smooth' })
          "
        >
          TOOLS
        </div>
      </div>
      <div
        class="w-full md:w-4/5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 reveal-section"
      >
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            class="w-6 h-6"
          /><span class="text-lg">AWS</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Docker</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Git</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
            class="w-6 h-6"
          /><span class="text-lg">Kubernetes</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Jenkins</span>
        </div>
        <div class="flex items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
            class="w-6 h-6"
          /><span class="text-lg">Nginx</span>
        </div>
      </div>
    </div>
  </div>
</template>

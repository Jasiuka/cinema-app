<template>
  <div>
    <NuxtLayout name="default" header-position="pos-absolute" main-class="main">
      <template #main>
        <section>
          <div
            class="primary__background"
            :style="{ 'background-image': 'url(' + currentMovie.image + ')' }"
          >
            <Transition name="cover" mode="out-in">
              <div class="primary__heading border-radius" :key="count">
                <h1 class="primary__title">{{ currentMovie.title }}</h1>
              </div>
            </Transition>
          </div>
          <div class="primary__indicators">
            <button
              class="primary__indicator"
              :class="movie.id === currentMovie.id && 'active'"
              v-for="movie in data"
              :key="movie.title"
              role="button"
              :title="'Change background to ' + movie.title + ' movie'"
              @click="handleIndicatorChange(movie.id)"
            ></button>
          </div>
        </section>
        <section class="primary__movies">
          <ul class="primary__card-list">
            <li v-for="movie in data" :key="movie.title + movie.id">
              <BaseCard main-class="primary__card-main">
                <template #card-main>
                  <img class="primary__card-image" :src="movie.poster" />
                  <div class="primary__card-content">
                    <div class="primary__card-content-side">
                      <h2>{{ movie.title }}</h2>
                      <span>{{ movie.genre }}</span>
                      <p>{{ movie.description }}</p>
                    </div>
                    <div class="primary__card-content-side">
                      <h3>Available times</h3>
                      <ul></ul>
                    </div>
                  </div>
                </template>
              </BaseCard>
            </li>
          </ul>
        </section>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const data = [
  {
    id: 1,
    title: "Deadpool 3",
    image: "/movies/deadpool.jpg",
    poster: "/movies/deadpool.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae itaque repellat quasi voluptatibus sed architecto expedita deleniti sunt reiciendis. Aperiam numquam perferendis voluptates aut necessitatibus error quos adipisci quia?",
    genre: "Action",
    times: ["12:00", "16:00"],
  },
  {
    id: 2,
    title: "Jumanji: Welcome to the Jungle",
    image: "/movies/jumanji.jpg",
    poster: "/movies/jumanji.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim totam repellendus aspernatur, dolorum quidem hic quas a, porro facere incidunt vero placeat voluptate illo nihil soluta ab? Ex, odit.",
    genre: "Comedy",
    times: ["10:00", "18:00"],
  },
  {
    id: 3,
    title: "Pirates of the Caribbean: Dead Men Tell No Tales",
    image: "/movies/pirates.jpg",
    poster: "/movies/pirates.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae itaque repellat quasi voluptatibus sed architecto expedita deleniti sunt reiciendis. Aperiam numquam perferendis voluptates aut necessitatibus error quos adipisci quia?",
    genre: "Action",
    times: ["20:00", "21:00"],
  },
  {
    id: 4,
    title: "Ralph Breaks the Internet",
    image: "/movies/ralph.jpg",
    poster: "/movies/ralph.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim totam repellendus aspernatur, dolorum quidem hic quas a, porro facere incidunt vero placeat voluptate illo nihil soluta ab? Ex, odit.",
    genre: "Animation",
    times: ["10:00", "18:00"],
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    image: "/movies/avengers-2.jpg",
    poster: "/movies/avengers-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestiae itaque repellat quasi voluptatibus sed architecto expedita deleniti sunt reiciendis. Aperiam numquam perferendis voluptates aut necessitatibus error quos adipisci quia?",
    genre: "Action",
    times: ["20:00", "21:00"],
  },
];
const currentMovie = ref(data[0]);
const count = ref(1);

onNuxtReady(() => {
  setInterval(() => {
    currentMovie.value = data[count.value];
    if (count.value === data.length - 1) {
      count.value = 0;
    } else {
      count.value += 1;
    }
  }, 7000);
});

const handleIndicatorChange = (movieId: number) => {
  const nextCount = movieId === data.length ? 0 : movieId;
  count.value = nextCount;

  currentMovie.value = data[movieId - 1];
};
</script>

<style scoped>
section {
  position: relative;
}
.primary__background {
  width: 100dvw;
  height: 100dvh;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s ease;
  display: flex;
  justify-content: baseline;
}

.image {
  min-width: 100%;
}
.primary__heading {
  background: rgba(39, 41, 50, 0.438);
  min-height: 50%;
  min-width: 40%;
  max-width: 40%;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  backdrop-filter: blur(3px);
}

.cover-enter-active .primary__title,
.cover-leave-active .primary__title {
  visibility: hidden;
}

.cover-enter-active {
  animation: slideToLeft 0.5s ease;
}

.cover-leave-active {
  animation: slideToLeft 0.5s ease reverse;
}

@keyframes slideToLeft {
  from {
    max-width: 0;
    min-width: 0;
  }
  to {
    max-width: 40%;
    min-width: 40%;
  }
}

.primary__indicators {
  position: absolute;
  top: 80%;
  left: 50%;
  display: flex;
  gap: var(--sp-small);
}

.primary__indicator {
  display: inline-block;
  min-width: 1rem;
  height: 6px;
  border-radius: var(--border-radius);
  background-color: white;
  transition: var(--transition);
}

.primary__indicator:not(.active):hover {
  background-color: aliceblue;
}

.active {
  background-color: var(--cl-accent);
  min-width: 1.4rem;
}

.primary__movies {
  max-width: var(--max-width);
  margin: 0 auto;
}

.primary__card-list {
  display: grid;
  grid-auto-flow: row;
  row-gap: var(--sp-medium);
}

:deep(.primary__card-main) {
  display: flex;
  max-height: 20rem;
  min-height: 20rem;
  /* clip-path: polygon(0 0, 94% 0, 100% 100%, 6% 100%); */
  /* clip-path: polygon(6% 0, 100% 0, 94% 100%, 0 99%); */
  padding: var(--pd-small);
  background-color: var(--cl-accent);
  overflow: hidden;
}

.primary__card-content {
  background-color: #272932;
  max-width: 70%;
  padding: var(--pd-small);
}

.primary__card-image {
  max-height: 10%;
  min-width: 30%;
  max-width: 30%;
}
</style>

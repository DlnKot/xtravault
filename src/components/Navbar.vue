<script setup>
 const props = defineProps({
   siteName: {
     type: String,
     required: true,
     default: 'NewsHub',
   },
   logoUrl: {
     type: String,
     required: true,
     default: '../assets/img/favicon.svg',
   }
 })
</script>

<template>
  <nav class="bg-neutral-800 border-neutral-400 border-b-1 font-(family-name:--primary-font)">
    <div class="px-16">
      <div class="flex items-center justify-center gap-1 h-14">
        <div class="flex flex-row items-center gap-1">
          <RouterLink class="text-white font-bold text-xl" to="/" :class="{ active: $route.name === 'Home'}"><img :src="logoUrl" alt="logo"></RouterLink>
          <RouterLink to="/" :class="{ active: $route.name === 'Home'}" class="text-white font-medium">{{ siteName }}</RouterLink>
        </div>


        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <RouterLink to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Главная</RouterLink>

            <!-- Dropdown -->
            <div class="relative group">
              <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                Услуги
                <svg class="ml-1 w-4 h-4" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Веб-разработка</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Дизайн</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Маркетинг</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Консультации</a>
              </div>
            </div>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">О нас</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Контакты</a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>
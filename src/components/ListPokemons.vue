    <script setup>
    defineProps({ name: String, imageUrl: String,  });
    </script>

    <template>
        <div class="flex flex-col md:flex-row cursor-pointer my-auto bg-custom-blue-100 gap-2 rounded-lg p-2 shadow-xl hover:p-3 transition  delay-100  hover:-translate-y-1 hover:scale-105 duration-700 ... ">
                <div class=" row-auto text-gray-200  hover: p-5 transition  delay-150  hover:-translate-y-1 hover:scale-105 duration-100 ... ">
                    <img :src="imageUrl" :alt="name" class="pl-0"/>
                    </div>
                        <div class="my-auto mt-0 p-4 ">
                                <div class="text-3xl overflow-ellipsis font-semibold whitespace-no-wrap overflow-hidden  text-white">
                                    <span class=" uppercase">{{ name.charAt(0) }}</span>{{ name.slice(1) }}
                                </div>
                        </div>
                </div>
    </template>

    <style scoped>

.main-bg{
        background-image: url('../assets/bg-gradient-blue.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    </style>
    
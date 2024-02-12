import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import { createRouter, createWebHistory } from "vue-router";
import HomeYellowCab from "./pages/HomeYellowCab.vue";
import OVerBuffHome from "./pages/OVerBuffHome.vue";
import tailwindPractice from "./pages/TailwindPractice.vue";
import homeAngvo from "./pages/HomeAngvo.vue";
import positions from "./pages/positions.vue";
import aboutAngvo from "./pages/AboutAngvo.vue";
import ServicesAngvo from "./pages/ServicesAngvo.vue"
import AngvoLogin from "./pages/AngvoLogin.vue";
import practice from "./pages/practice.vue"
import TaskOne from "./pages/TaskOne.vue";
import NumberPage from "./pages/NumberPage.vue";
import taskNamePage from "./pages/TaskNamePage.vue";
import TaskEmailPage from "./pages/TaskEmailPage.vue";
import TaskDetailsPage from "./pages/TaskDetailsPage.vue";
import TaskServiceAgreement from "./pages/TaskServiceAgreement.vue";
import TaskPlans from "./pages/TaskPlans.vue";
import TaskKindShipPremium from "./pages/TaskKindShipPremium.vue";
import UdummyLectures from "./pages/UdummyLectures.vue";
import TaskTwo from "./pages/TaskTwo.vue";
import TaskThreeHome from './pages/TaskThreeHome.vue';
import AfterSchoolAbout from "./pages/AfterSchoolAbout.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/tasktwo",
            name: "tasktwo   ",
            component: TaskTwo,
        },
        {
            path: "/udummy",
            name: "udummylectires   ",
            component: UdummyLectures,
        },
        {
            path: "/ref",
            name: "home",
            component: HomeYellowCab,
        },
        {
            path: "/home",
            name: "overBuffHome",
            component: OVerBuffHome,
        },
        {
            path: "/tailwind",
            name: "tailwindPractice",
            component: tailwindPractice,
        },
        {
            path: "/",
            name: "home",
            component: homeAngvo,
        },
        {
            path: "/aboutAngvo",
            name: "about",
            component: aboutAngvo,
        },
        {
            path: "/sevicesAngvo",
            name: "Services",
            component: ServicesAngvo,
        },
        {
            path: "/angvoLogin",
            name: "login",
            component: AngvoLogin,
        },
        {
            path: "/practice",
            name: "practice",
            component: practice,
        },

        {
            path: "/positions",
            name: "tailwindPositions",
            component: positions,
        },

        // Start Pages Of My Task One

        {
            path: "/taskone",
            name: "taskone",
            component: TaskOne,
        },
        {
            path: "/numberPage",
            name: "numberPage",
            component: NumberPage,
        },
        {
            path: "/namePage",
            name: "namePage",
            component: taskNamePage,
        },
        {
            path:"/emailPage",
            name:'TaskEmailPage',
            component:TaskEmailPage
        },
        {
            path:"/detailPage",
            name:'detailPage',
            component:TaskDetailsPage
        },
        {
            path:"/serviceAgreement",
            name:'serviceAgreement',
            component:TaskServiceAgreement
        },
        {
            path:"/plans",
            name:'task_plans',
            component: TaskPlans
        },

        // End pages of task one

        {
            path:"/kindship",
            name:'kindship',
            component: TaskKindShipPremium
        },
    

    //  pages Of After School website
        {
            path: "/taskThreeHome",
            name: "taskthreeHome ",
            component: TaskThreeHome,
        },
        {
            path: "/aboutAfterSchool",
            name: "taskthreeAbout ",
            component: AfterSchoolAbout,
        },
    ],
});
createApp(App).use(router).mount('#app')

<template>
    <div v-if="$route.name ==='login'">
        <router-view></router-view>
        <Footer />
    </div>
    <div v-else-if="this.$route.name ==='register'">
        <router-view></router-view>
        <Footer />
    </div>
    <div id="app" v-else-if="this.$store.getters.role === 'Admin'">
        <TopMenu />
        <AdminLeft />
        <RightMenu />
        <router-view />
        <Footer />
    </div>
    <div id="app" v-else-if="this.$store.getters.role === 'Marketing'">
        <TopMenu />
        <MarketingLeft />
        <RightMenu />
        <router-view />
        <Footer v-show="$route.name !== 'detail_invoice'" />
    </div>
     <div id="app" v-else-if="this.$store.getters.role === 'Magang'">
        <TopMenu />
        <MarketingLeft />
        <RightMenu />
        <router-view />
        <Footer v-show="$route.name !== 'detail_invoice'" />
    </div>
    <div id="app" v-else-if="this.$store.getters.role === 'Tukang'">
        <TopMenu />
        <TukangLeft />
        <RightMenu />
        <router-view />
        <Footer />
    </div>
    <div id="app" v-else-if="this.$store.getters.role === 'Finance'">
        <TopMenu />
        <FinanceLeft />
        <RightMenu />
        <router-view />
        <Footer />
    </div>
    <div id="app" v-else-if="this.$store.getters.role === 'Noc'">
        <TopMenu />
        <NocLeft />
        <RightMenu />
        <router-view />
        <Footer />
    </div>
    <div id="app" v-else-if="this.$store.getters.role === 'Developer'">
        <TopMenu />
        <DeveloperLeft />
        <RightMenu />
        <router-view />
        <Footer />
    </div>
</template>
<script>
import TopMenu from '@/components/Top_menu.vue'
import RightMenu from '@/components/Right_menu.vue'
import Footer from '@/components/footer.vue'
// ---//---
import TukangLeft from '@/components/Tukang/Left_menu.vue'
import MarketingLeft from '@/components/Marketing/Left_menu.vue'
import FinanceLeft from '@/components/Finance/Left_menu.vue'
import AdminLeft from '@/components/Admin/Left_menu.vue'
import NocLeft from '@/components/Noc/Left_menu.vue'
import DeveloperLeft from '@/components/Developer/Left_menu.vue'

export default {
    name: 'app',
    components: {
        TopMenu,
        TukangLeft,
        MarketingLeft,
        FinanceLeft,
        NocLeft,
        AdminLeft,
        DeveloperLeft,
        RightMenu,
        Footer
    },
    data() {
        return {

        }
    },
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        logout: function() {
            this.$store.dispatch("logout").then(() => {
                this.$router.push('/');
            });
        }
    }
};
</script>
<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router unique-opened :default-active="$route.path">
        <!-- :default-openeds="['3']" 加這個路由變換會一直呼叫 -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>網站內容管理
          </template>
          <el-menu-item-group>
            <template slot="title">配料</template>
            <el-menu-item index="/items/create">新建配料</el-menu-item>
            <el-menu-item index="/items/list">配料列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">飲料品項</template>
            <el-menu-item index="/drink/create">新建飲料</el-menu-item>
            <el-menu-item index="/drink/list">飲料列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>行銷管理
          </template>
          <el-menu-item-group>
            <template slot="title">廣告</template>
            <el-menu-item index="/ads/create">新建廣告</el-menu-item>
            <el-menu-item index="/ads/list">廣告列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>系統設置
          </template>
          <el-menu-item-group>
            <template slot="title">分類</template>
            <el-menu-item index="/categories/create">新建分類</el-menu-item>
            <el-menu-item index="/categories/list">分類列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">管理員</template>
            <el-menu-item index="/admin_users/create">新建管理員</el-menu-item>
            <el-menu-item index="/admin_users/list">管理員列表</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <template slot="title">系統</template>
            <el-menu-item index="/login" @click="logout">登出</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px"></el-header>

      <el-main>
        <router-view :key="$route.path"></router-view>
        <!-- 加了key可以分辨組件一樣但是 路由不一樣 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      localStorage.clear();
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
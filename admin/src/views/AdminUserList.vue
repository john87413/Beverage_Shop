<template>
  <div>
    <h1>管理員列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="用戶名稱"></el-table-column>
      <el-table-column fixed="right" label="更動" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$change.edit(scope.row, scope.$index, 1, `admin_users`)"
            >编辑</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="
              $change.remove(scope.row, scope.$index, 1, fetch, `admin_users`)
            "
            >刪除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    // 拿到資料庫全部的資料
    async fetch() {
      const res = await this.$http.get("rest/admin_users");
      this.items = res.data; //這個res.data 就等於是那個Category 的Schema
    },
    // 刪除的方法
    // async remove(row) {
    //   this.$confirm(`是否要刪除 "${row.username}" `, "訊息", {
    //     confirmButtonText: "確定",
    //     cancelButtonText: "取消",
    //     type: "warning",
    //   })
    //     .then(async () => {
    //       await this.$http.delete(`rest/admin_users/${row._id}`);
    //       this.$message({
    //         type: "success",
    //         message: "删除成功!",
    //       });
    //       this.fetch();
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "已取消删除",
    //       });
    //     });
    // },
  },
  created() {
    this.fetch();
  },
};
</script>
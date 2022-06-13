<template>
  <div>
    <h1>分類列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="parent.name" label="上級分類"></el-table-column>
      <el-table-column prop="name" label="分類名稱"></el-table-column>
      <el-table-column fixed="right" label="更動" width="180">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="$change.edit(scope.row, scope.$index, 5, `categories`)"
            >编辑</el-button
          >
          <el-button
            type="primary"
            size="small"
            @click="$change.remove(scope.row, scope.$index, 5, fetch, `categories`)"
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
      const res = await this.$http.get("rest/categories");
      this.items = res.data; //這個res.data 就等於是那個Category 的Schema
    },
    // 刪除的方法
    // async remove(row, index) {
    //   if (index < 5) {
    //     this.$message({
    //       type: "info",
    //       message: "內建資料不可刪除",
    //     });
    //   } else {
    //     this.$confirm(`是否要刪除分類 "${row.name}" `, "訊息", {
    //       confirmButtonText: "确定",
    //       cancelButtonText: "取消",
    //       type: "warning",
    //     })
    //       .then(async () => {
    //         await this.$http.delete(`rest/categories/${row._id}`);
    //         this.$message({
    //           type: "success",
    //           message: "删除成功!",
    //         });
    //         this.fetch();
    //       })
    //       .catch(() => {
    //         this.$message({
    //           type: "info",
    //           message: "已取消删除",
    //         });
    //       });
    //   }
    // },
    // // 編輯
    // edit(row, index) {
    //   if (index < 5) {
    //     this.$message({
    //       type: "info",
    //       message: "內建資料不可編輯",
    //     });
    //   } else {
    //     this.$router.push(`/categories/edit/${row._id}`);
    //   }
    // },
  },
  created() {
    this.fetch();
  },
};
</script>
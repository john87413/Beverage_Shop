<template>
  <div>
    <h1>{{id ? '編輯' : '新建'}}分類</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上級分類">
        <el-select v-model="model.parent">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名稱">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">儲存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      parents: []
    };
  },
  methods: {
    // 新增與編輯
    async save() {
      if (this.model.name != null) {
        if (this.id) {
          await this.$http.put(`rest/categories/${this.id}`, this.model);
        } else {
          await this.$http.post("rest/categories", this.model);
        }
        this.$router.push("/categories/list");
        this.$message({ type: "success", message: "儲存成功" });
      } else {
        this.$message.error("名稱不得空白");
      }
    },
    // 編輯時要拿到編輯之前的資料
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
    },
    // 拿到我們所需要的上級分類
    async fetchParents() {
      const res = await this.$http.get(`rest/categories`);
      this.parents = res.data;
    }
  },
  created() {
    this.fetchParents();
    this.id && this.fetch(); //表示如果有id 就執行 fetch 拿到要編輯的model
  },
};
</script>
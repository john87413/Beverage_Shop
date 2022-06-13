import Vue from "vue";
import router from './router'
import http from './http';

const edit = (row, index, myDataIndex, url) => {
    if (index < myDataIndex) {
        Vue.prototype.$message({
            type: "info",
            message: "內建資料不可編輯",
        });
    } else {
        router.push(`/${url}/edit/${row._id}`);
    }
}

const remove = async (row, index, myDataIndex, fetch, url) => {
    if (index < myDataIndex) {
        Vue.prototype.$message({
            type: "info",
            message: "內建資料不可刪除",
        });
    } else {
        Vue.prototype.$confirm(`是否要刪除 "${url === 'articles' ? row.title : row.name}" `, "訊息", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
        })
            .then(async () => {
                await http.delete(`rest/${url}/${row._id}`);
                Vue.prototype.$message({
                    type: "success",
                    message: "删除成功!",
                });
                fetch();
            })
            .catch(() => {
                Vue.prototype.$message({
                    type: "info",
                    message: "已取消删除",
                });
            });
    }
}

export { edit, remove };
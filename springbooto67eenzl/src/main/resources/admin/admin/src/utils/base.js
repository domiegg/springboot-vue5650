const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto67eenzl/",
            name: "springbooto67eenzl",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto67eenzl/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园共享系统"
        } 
    }
}
export default base

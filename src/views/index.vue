<template>
    <div>
        这是{{page}}页面
    </div>
</template>
<script>
import "../style/style.css"

export default {
    data: function () {
        return {
            page: 'index'
        }
    }
}
</script>
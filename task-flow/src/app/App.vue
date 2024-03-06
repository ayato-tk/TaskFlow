<script setup lang="ts">
import './scss/style.scss'
</script>

<template>
    <!--
      TODO: Refatorar o App para componentizar o header.

    -->
    <el-header class="header">Header</el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
</template>

<style scopde>
  .header {
    background-color: #333333;
    text-align: center;
    color: white;
  }
</style>

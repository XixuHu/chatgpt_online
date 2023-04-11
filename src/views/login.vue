<template>
  <div class="box">
    <input class="input" v-model="answer" placeholder="输入你的口令" />
    <!-- 写一个按钮 -->
    <button class="button" @click="send">发送</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Cloud } from "laf-client-sdk";

const cloud = new Cloud({
  baseUrl: "https://<APPID>.laf.dev",
  getAccessToken: () => "",
});

const answer = ref("");

async function send() {
  const message = answer.value;
  answer.value = "";
  if (message == "") {
    return;
  }
  try {
    const res = await cloud.invoke("get", { message });

    if (res.ok) {
      window.location.href = "/home";
    }
  } catch (error) {
    console.log(error);
    return;
  }
}
</script>

<style>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.input {
  margin-top: 300px;
  width: 200px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
}
.button {
  margin-top: 300px;
  margin-left: 10px;
  width: 60px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}
</style>

<template>
	<div style="background-color: #9ED2C6; height: 300px; padding-top: 50px;">
		<h2>ログイン</h2>
		<label for="email">Email：</label>
		<input
			type="email"
			id="email"
			v-model="email"
		>
		<br><br>
		<label for="password">パスワード：</label>
		<input
			id="password"
			type="password"
			v-model="password"
		>
		<br><br>
		<button @click="login">送信</button>
	</div>
</template>
	
<script>
	export default {
		data() {
			return {
				email: '',
				password: '',
			};
		},
    methods: {
    login() {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        });
        this.email = '';
        this.password = '';
      }
    },
	}
</script>
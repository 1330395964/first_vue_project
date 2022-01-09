<template>
	<div>
		<!-- 使用vuex中定义的数据 -->
		<h1>{{ name }}</h1>
		<h1>{{ $store.state.name }}</h1>
		<h1>{{ projects }}</h1>

		<!-- 全局计算属性的使用 -->
		<h1>a={{ a }}</h1>
		<h1>a={{ b }}</h1>
		<h1>a*b={{ $store.getters.c }}</h1>
		<h1>{{ c }}</h1>   

		<!-- 调用全局的方法修改state中的数据 -->
		<button @click="$store.commit('addNum')">+</button>
		<br>
		<button @click="addNum">+</button>

		<!-- 调用actions中的方法 -->
		<button @click="$store.dispatch('getProjects')">获取项目</button>
		<br>
		<button @click="getProjects">获取项目</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions } from 'vuex'
export default {
	data() {
		return {}
	},
	methods: {
		// 调用全局方法的另一种形式
		...mapMutations(['addNum']),
		...mapActions(['addNum']),
	},
	components: {},
	mounted() {},
	computed: {
		// 通过计算属性 返回vuex中定义的全局数据
		// name() {
		// 	return this.$store.state.name
		// },

		// 使用对象展开运算符将此对象混入到外部对象中
		...mapState(['name', 'projects', 'a', 'b']),
		...mapGetters(['c']),
	},
	created(){}
}
</script> 

<style scoped>
</style>
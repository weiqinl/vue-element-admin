<template>
	<div class="wq-increment">
		<button v-on:click="increment"> {{ counter }}</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				counter: 0,
			};
		},
		methods: {
			increment() {
				this.counter += 1;
				this.$emit('increment')
			}
		}
	}
</script>
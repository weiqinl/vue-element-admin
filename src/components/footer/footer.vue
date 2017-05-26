<template>
  <div class="wq-foot">
    <div class="foot-copy  h30 lh30 pl10  bdc bgf0">
      Copyright &copy; {{getYear}} <a target="_blank" href="http://www.cnblogs.com/weiqinl">weiqinl</a>. All rights reserved.
      <span class="r pr10">
      V0.1.0
    </span>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default {
		computed: {
			getYear() {
				let y = new Date().getFullYear();
				let showY = y;
				if (y > 2017) {
					showY = "2017-" + y;
				}
				return showY;
			}
		}
	}
</script>

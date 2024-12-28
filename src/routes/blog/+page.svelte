<script>
	let { data } = $props();
	let posts = data.posts;
</script>

<h1>Blog Posts</h1>
<ul>
	{#each posts as { slug, title, date, description }}
		<li>
			<a href={`/blog/${slug}`}>
				<h2>{title}</h2>
				<p>{date}</p>
				<p>{description}</p>
			</a>
		</li>
	{/each}
</ul>

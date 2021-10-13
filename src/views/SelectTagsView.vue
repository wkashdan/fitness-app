<template>
	<div>
		<h2 class="text-subtitle-1 mb-5">Select at least 2 tags</h2>
		<v-item-group multiple v-model="selectedTags">
			<v-container>
				<v-row>
					<v-col
						v-for="(tag, i) in tags"
						:key="i"
						cols="6"
						md="4"
					>
						<v-item v-slot="{ active, toggle }">
							<v-card
								:color="active ? 'deep-purple accent-4' : 'deep-purple lighten-4'"
								class="d-flex align-center"
								height="100"
								@click="toggle"
							>
								<v-scroll-y-transition>
									<div
										v-if="active"
										class="text-h5 flex-grow-1 text-center white--text"
									>
										{{ tag.name }}
									</div>
									<div
										v-else
										class="text-h5 flex-grow-1 text-center white--text"
									>
										{{ tag.name }}
									</div>
								</v-scroll-y-transition>
							</v-card>
						</v-item>
					</v-col>
				</v-row>
			</v-container>
		</v-item-group>
		<v-fab-transition>
      <v-btn
				v-if="hasTagThreshold"
        key="person"
        color="deep-purple accent-4"
        large
        dark
        bottom
        right
				fixed
				@click="goToContentFeed"
      >
        Continue<v-icon dark>mdi-arrow-right</v-icon>
      </v-btn>
    </v-fab-transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tags: [
				{
					name: 'Get fit'
				},
				{
					name: 'Cardio'
				},
				{
					name: 'Fit fam'
				},
				{
					name: 'Get strong'
				},
				{
					name: 'Weights'
				},
				{
					name: 'Gym life'
				},
				{
					name: 'Get healthy'
				},
				{
					name: 'Eat clean'
				},
				{
					name: 'Fit motivation'
				},
				{
					name: 'No excuses'
				}
			],
			selectedTags: [],
		};
	},
	computed: {
		hasTagThreshold() {
			return this.selectedTags.length >= 2;
		},
	},

	methods: {
		goToContentFeed() {
			this.$router.push({
				name: 'feed'
			});
		}
	}
}
</script>

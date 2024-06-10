import { writeFileSync } from 'fs';

const outPath = './www/data/navigation.json';

export function load(app) {
	app.renderer.postRenderAsyncJobs.push(async (renderer) => {
		const navigation = renderer.navigation;
		writeFileSync(outPath, JSON.stringify(navigation));
	});
}

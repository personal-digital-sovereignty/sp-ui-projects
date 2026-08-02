import { mount, unmount } from 'svelte';
import ProjectsPage from './+page.svelte';

export const mountProjects = (target: HTMLElement, props: any) => {
	const component = mount(ProjectsPage, {
		target,
		props
	});
	return component;
};

export const unmountProjects = (component: any) => {
	if (component) {
		unmount(component);
	}
};

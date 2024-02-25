const API_URL = "https://api.github.com/repos/rabrain/chat-bar-docs/releases/latest";

interface Asset {
	browser_download_url: string;
	content_type: string;
	created_at: string;
	download_count: number;
	id: number;
	label: string;
	name: string;
	node_id: string;
	size: number;
	state: string;
	updated_at: string;
	uploader: any;
	url: string;
}

type Extension = "dmg" | "exe" | "AppImage";

enum Platform {
	Mac = "mac",
	Mas = "mas",
	Windows = "windows",
	Linux = "linux",
}

const PLATFORM_EXTENSIONS: Partial<Record<Platform, Extension>> = {
	[Platform.Mac]: "dmg",
	[Platform.Windows]: "exe",
};

function getCurrentPlatform(): Platform {
	const userAgent = navigator.userAgent.toLowerCase();
	if (userAgent.match(/(mac|os x)/)) {
		return Platform.Mac;
	}
	if (userAgent.match(/windows/)) {
		return Platform.Windows;
	}
	if (userAgent.match(/linux/)) {
		return Platform.Linux;
	}
	throw Error("Unrecognized platform");
}

function updateVariableDownloadLinks(): void {
	const platform = getCurrentPlatform();
	const links = document.getElementsByClassName("download");
	Array.from(links).forEach(a => {
		a.classList.replace("download", `download-${platform}`);
	});
}

async function insertDownloadUrls(): Promise<void> {
	// Fetch asset list
	const apiResponse = await fetch(API_URL);
	const assets = (await apiResponse.json()).assets as Asset[];

	// Build map of file extensions and asset URLs
	const assetMap: Partial<Record<Extension, string>> = {};
	assets.forEach(asset => {
		const extension = asset.browser_download_url.split(".").slice(-1)[0] as Extension;
		assetMap[extension] = asset.browser_download_url;
	});

	const platforms = Object.values(Platform) as Platform[];
	platforms.forEach((platform): void => {
		const extension = PLATFORM_EXTENSIONS[platform] as Extension;
		const url = assetMap[extension];

		const links = Array.from(
			document.getElementsByClassName(`download-${platform}`),
		) as HTMLAnchorElement[];
		links.forEach((a): void => {
			if (url) {
				a.setAttribute("href", url);
			}
		});
	});
}

updateVariableDownloadLinks();
insertDownloadUrls();

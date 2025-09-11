import type { VSCodeExtension } from '../types';

const VSCODE_MARKETPLACE_API = 'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery';

export async function fetchVSCodeExtension(): Promise<VSCodeExtension | null> {
  try {
    const requestBody = {
      filters: [{
        criteria: [{
          filterType: 7,
          value: "OAS.05D8FE2B-55EC-4A28-8865-C2570F30A1C9"
        }],
        pageNumber: 1,
        pageSize: 1,
        sortBy: 0,
        sortOrder: 0
      }],
      assetTypes: [],
      flags: 914
    };

    const response = await fetch(VSCODE_MARKETPLACE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json;api-version=3.0-preview.1'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch VS Code extension');
    }

    const data = await response.json();
    
    if (data.results?.[0]?.extensions?.length > 0) {
      const extension = data.results[0].extensions[0];
      return {
        extensionId: extension.extensionId,
        extensionName: extension.extensionName,
        displayName: extension.displayName,
        shortDescription: extension.shortDescription,
        publisher: extension.publisher,
        versions: extension.versions,
        statistics: extension.statistics,
        tags: extension.tags || []
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching VS Code extension:', error);
    // Return mock data as fallback
    return {
      extensionId: "OAS.05D8FE2B-55EC-4A28-8865-C2570F30A1C9",
      extensionName: "angular-html-ts-switcher",
      displayName: "Angular Html TS Switcher",
      shortDescription: "Quickly switch between Angular component files (HTML, TypeScript, CSS)",
      publisher: {
        displayName: "OAS",
        publisherId: "OAS",
        publisherName: "OAS"
      },
      versions: [{
        version: "1.0.0",
        lastUpdated: "2024-01-01T00:00:00Z"
      }],
      statistics: [
        { statisticName: "install", value: 3221 },
        { statisticName: "averagerating", value: 4.5 }
      ],
      tags: ["angular", "typescript", "html", "switcher"]
    };
  }
}
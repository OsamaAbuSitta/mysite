import type { GitHubRepo, GitHubUser, GitHubGist } from '../types';

const GITHUB_USERNAME = 'OsamaAbuSitta';
const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubUser(): Promise<GitHubUser> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);

    // Return mock data as fallback
    return {
      login: GITHUB_USERNAME,
      name: "Osama Abu Sitta",
      bio: "Solutions Architect & Senior .NET Developer with 11+ years of experience in enterprise platforms, microservices, and DevOps automation.",
      avatar_url: "https://github.com/OsamaAbuSitta.png",
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      followers: 2,
      following: 12,
      public_repos: 51
    };
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
    );
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);

    // Return mock data as fallback
    return [
      {
        id: 1,
        name: "ListMapping",
        full_name: `${GITHUB_USERNAME}/ListMapping`,
        description: "A lightweight C# utility library for mapping lists and collections efficiently",
        html_url: `https://github.com/${GITHUB_USERNAME}/ListMapping`,
        homepage: null,
        stargazers_count: 8,
        forks_count: 2,
        language: "C#",
        topics: ["csharp", "mapping", "collections"],
        updated_at: "2024-01-15T10:00:00Z"
      },
      {
        id: 2,
        name: "QueryBuilder",
        full_name: `${GITHUB_USERNAME}/QueryBuilder`,
        description: "A powerful query builder library for .NET applications with fluent API design",
        html_url: `https://github.com/${GITHUB_USERNAME}/QueryBuilder`,
        homepage: null,
        stargazers_count: 15,
        forks_count: 4,
        language: "C#",
        topics: ["csharp", "query-builder", "linq"],
        updated_at: "2024-01-10T10:00:00Z"
      },
      {
        id: 3,
        name: "SmtpMailTest",
        full_name: `${GITHUB_USERNAME}/SmtpMailTest`,
        description: "SMTP mail testing utility for developers to test email functionality",
        html_url: `https://github.com/${GITHUB_USERNAME}/SmtpMailTest`,
        homepage: null,
        stargazers_count: 6,
        forks_count: 1,
        language: "C#",
        topics: ["csharp", "smtp", "email"],
        updated_at: "2024-01-05T10:00:00Z"
      },
      {
        id: 4,
        name: "XTinyLog",
        full_name: `${GITHUB_USERNAME}/XTinyLog`,
        description: "Lightweight logging library for .NET applications with minimal overhead",
        html_url: `https://github.com/${GITHUB_USERNAME}/XTinyLog`,
        homepage: null,
        stargazers_count: 12,
        forks_count: 3,
        language: "C#",
        topics: ["csharp", "logging", "dotnet"],
        updated_at: "2024-01-01T10:00:00Z"
      },
      {
        id: 5,
        name: "angular_clips",
        full_name: `${GITHUB_USERNAME}/angular_clips`,
        description: "A modern video sharing platform built with Angular and Firebase",
        html_url: `https://github.com/${GITHUB_USERNAME}/angular_clips`,
        homepage: "https://angular-clips-psi.vercel.app/",
        stargazers_count: 18,
        forks_count: 5,
        language: "TypeScript",
        topics: ["angular", "firebase", "video"],
        updated_at: "2023-12-20T10:00:00Z"
      },
      {
        id: 6,
        name: "tic-tac-toe-game-js",
        full_name: `${GITHUB_USERNAME}/tic-tac-toe-game-js`,
        description: "Interactive tic-tac-toe game built with vanilla JavaScript",
        html_url: `https://github.com/${GITHUB_USERNAME}/tic-tac-toe-game-js`,
        homepage: "https://osamaabusitta.github.io/tic-tac-toe-game-js/index.html",
        stargazers_count: 4,
        forks_count: 1,
        language: "JavaScript",
        topics: ["javascript", "game", "html"],
        updated_at: "2023-12-15T10:00:00Z"
      }
    ];
  }
}

export async function fetchPinnedRepos(): Promise<GitHubRepo[]> {
  // GitHub doesn't have a direct API for pinned repos, so we'll fetch all repos
  // and filter for the ones mentioned in the requirements
  const allRepos = await fetchGitHubRepos();
  const pinnedRepoNames = [
    'SmtpMailTest',
    'XTinyLog',
    'tic-tac-toe-game-js',
    'angular_clips',
    'QueryBuilder',
    'ListMapping'
  ];

  return allRepos.filter(repo =>
    pinnedRepoNames.includes(repo.name)
  );
}

export async function fetchGitHubGists(): Promise<GitHubGist[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/gists?per_page=6`
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const gists = await response.json();

    // Fetch content for each gist
    const gistsWithContent = await Promise.all(
      gists.map(async (gist: any) => {
        try {
          // Fetch the full gist content
          const gistResponse = await fetch(`${GITHUB_API_BASE}/gists/${gist.id}`);
          if (gistResponse.ok) {
            return await gistResponse.json();
          }
          return gist;
        } catch (error) {
          console.error(`Error fetching gist ${gist.id}:`, error);
          return gist;
        }
      })
    );

    return gistsWithContent;
  } catch (error) {
    console.error('Error fetching GitHub gists:', error);

    // Return mock data as fallback
   return [
  {
    id: "eea1ae11e3a9013e22b8063027af0944",
    description: "SQL Server diagnostic scripts to monitor query memory usage and detect long-running queries",
    html_url: "https://gist.github.com/OsamaAbuSitta/eea1ae11e3a9013e22b8063027af0944",
    files: {
      "sql_server_query_diagnostics.sql": {
        filename: "sql_server_query_diagnostics.sql",
        language: "SQL",
        content: `-- Identify Long Running Queries
SELECT r.session_id, r.status, r.command, r.start_time AS QueryStartTime,
       DATEDIFF(SECOND, r.start_time, GETDATE()) AS ElapsedSeconds,
       SUBSTRING(qt.text, r.statement_start_offset/2,
         (CASE WHEN r.statement_end_offset = -1
               THEN LEN(CONVERT(NVARCHAR(MAX), qt.text)) * 2
               ELSE r.statement_end_offset END - r.statement_start_offset)/2) AS QueryText
FROM sys.dm_exec_requests r
CROSS APPLY sys.dm_exec_sql_text(r.sql_handle) AS qt
WHERE r.session_id != @@SPID AND DATEDIFF(SECOND, r.start_time, GETDATE()) > 5
ORDER BY ElapsedSeconds DESC;`
      }
    },
    created_at: "2025-09-11T20:47:00Z",
    updated_at: "2025-09-11T20:47:00Z"
  },
  {
    id: "aa198ef6f68626367f103ffb245c35d5",
    description: "SQL script to monitor memory grants and usage for active queries in SQL Server",
    html_url: "https://gist.github.com/OsamaAbuSitta/aa198ef6f68626367f103ffb245c35d5",
    files: {
      "active_query_memory_grants.sql": {
        filename: "active_query_memory_grants.sql",
        language: "SQL",
        content: `SELECT mg.session_id, mg.requested_memory_kb, mg.granted_memory_kb,
       mg.used_memory_kb, mg.max_used_memory_kb, s.text AS query_text
FROM sys.dm_exec_query_memory_grants mg
CROSS APPLY sys.dm_exec_sql_text(mg.plan_handle) s
WHERE mg.granted_memory_kb > 0
ORDER BY mg.granted_memory_kb DESC;`
      }
    },
    created_at: "2025-09-11T20:45:00Z",
    updated_at: "2025-09-11T20:45:00Z"
  },
  {
    id: "72ea76441995ecdea0ae0c74f6e65133",
    description: "FileLogger is a simple, thread-safe logger for .NET that writes timestamped messages to a file.",
    html_url: "https://gist.github.com/OsamaAbuSitta/72ea76441995ecdea0ae0c74f6e65133",
    files: {
      "FileLogger.cs": {
        filename: "FileLogger.cs",
        language: "C#",
        content: `public class FileLogger {
  private readonly string _filePath;
  private readonly object _lock = new object();
  public FileLogger(string filePath) {
    _filePath = filePath ?? throw new ArgumentNullException(nameof(filePath));
    Directory.CreateDirectory(Path.GetDirectoryName(_filePath));
    if (!File.Exists(_filePath)) { using (File.Create(_filePath)) { } }
  }
  public void Information(string message) =>
    WriteLogToFile($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss.fff} [INFO] {message}");
  public void LogError(string message) =>
    WriteLogToFile($"{DateTime.UtcNow:yyyy-MM-dd HH:mm:ss.fff} [ERROR] {message}");
}`
      }
    },
    created_at: "2025-09-11T20:55:00Z",
    updated_at: "2025-09-11T20:55:00Z"
  },
  {
    id: "dd5819f832208593501a23bb7234bf9d",
    description: "Dotnet core - Entity Framework Core naming convention",
    html_url: "https://gist.github.com/OsamaAbuSitta/dd5819f832208593501a23bb7234bf9d",
    files: {
      "ModelBuilderExtensions.cs": {
        filename: "ModelBuilderExtensions.cs",
        language: "C#",
        content: `public static class ModelBuilderExtensions {
  public static void ApplyNamingConvention(this ModelBuilder modelBuilder) {
    var types = modelBuilder.Model.GetEntityTypes();
    foreach (var t in types) {
      t.SetTableName(t.GetTableName().ToLowerUnderscoreName());
      foreach (var p in t.GetProperties()) {
        var isOwned = p.DeclaringEntityType.IsOwned();
        if (!isOwned) p.SetColumnName(p.Name.ToLowerUnderscoreName());
      }
    }
  }
}`
      }
    },
    created_at: "2022-10-03T10:21:00Z",
    updated_at: "2022-10-03T10:21:00Z"
  },
  {
    id: "a7e7d1aa841258749c1a36692e81be72",
    description: "ListToTree.cs",
    html_url: "https://gist.github.com/OsamaAbuSitta/a7e7d1aa841258749c1a36692e81be72",
    files: {
      "ListToTree.cs": {
        filename: "ListToTree.cs",
        language: "C#",
        content: `public class TreeNode<T> { public T Data { get; set; } public IEnumerable<TreeNode<T>> Children { get; set; } }
public static class CollectionExtensions {
  public static IEnumerable<TreeNode<TSource>> ToTree<TSource, TIdentity>(this IEnumerable<TSource> list,
    Func<TSource,TIdentity> id, Func<TSource,TIdentity> parentId, TIdentity rootId) {
    foreach (var item in list.Where(i => parentId(i).Equals(rootId)))
      yield return new TreeNode<TSource> { Data = item, Children = list.ToTree(id, parentId, id(item)) };
  }
}`
      }
    },
    created_at: "2020-06-12T15:48:00Z",
    updated_at: "2020-06-12T15:48:00Z"
  },
  {
    id: "6b38d253fe723404015b4771ba2645d2",
    description: "JSON.stringify ignore timezones \"don't modify data after stringify\"",
    html_url: "https://gist.github.com/OsamaAbuSitta/6b38d253fe723404015b4771ba2645d2",
    files: {
      "app.js": {
        filename: "app.js",
        language: "JavaScript",
        content: `Date.prototype.toJSON = function(){
  const hoursDiff = this.getHours() - this.getTimezoneOffset() / 60;
  this.setHours(hoursDiff);
  return this.toISOString();
};`
      }
    },
    created_at: "2021-04-17T12:08:00Z",
    updated_at: "2021-04-17T12:08:00Z"
  }
];

  }
}
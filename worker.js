addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const HTML_CONTENT = `<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tribute to GitHub</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body { background-color: #0d1117; }
        .github-bg { background-color: #161b22; }
        .github-border { border-color: #30363d; }
        .github-text { color: #c9d1d9; }
        .github-btn { background-color: #238636; }
        .github-btn:hover { background-color: #2ea043; }
        .github-link { color: #58a6ff; }
        .github-link:hover { color: #79c0ff; }
        .stat-card { background-color: #161b22; border: 1px solid #30363d; }
        .octo-arm { transform-origin: 130px 106px; }
        .github-corner:hover .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
        }
        @keyframes octocat-wave {
            0%, 100% { transform: rotate(0) }
            20%, 60% { transform: rotate(-25deg) }
            40%, 80% { transform: rotate(10deg) }
        }
        .gradient-text {
            background: linear-gradient(45deg, #58a6ff, #79c0ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
</head>
<body class="min-h-screen text-gray-200">
    <!-- GitHub Corner -->
    <a href="https://github.com" class="github-corner" aria-label="Visit GitHub">
        <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#58a6ff; color:#0d1117; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm"></path>
            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor"></path>
        </svg>
    </a>

    <div class="container mx-auto px-4 py-16">
        <div class="text-center mb-16">
            <h1 class="text-5xl font-bold mb-6 gradient-text">致敬 GitHub</h1>
            <p class="text-xl text-gray-400">Where the world builds software</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div class="stat-card rounded-lg p-6 text-center">
                <div class="text-4xl font-bold mb-2 github-link">73M+</div>
                <div class="text-gray-400">开发者</div>
            </div>
            <div class="stat-card rounded-lg p-6 text-center">
                <div class="text-4xl font-bold mb-2 github-link">200M+</div>
                <div class="text-gray-400">代码仓库</div>
            </div>
            <div class="stat-card rounded-lg p-6 text-center">
                <div class="text-4xl font-bold mb-2 github-link">84M+</div>
                <div class="text-gray-400">新仓库/年</div>
            </div>
        </div>

        <div class="github-bg rounded-lg p-8 max-w-4xl mx-auto github-border border">
            <h2 class="text-2xl font-bold mb-6 text-center">开源精神</h2>
            <div class="space-y-6 text-gray-300">
                <p class="leading-relaxed">
                    GitHub 不仅仅是一个代码托管平台，它是开源精神的象征。在这里，来自世界各地的开发者相互协作、分享知识、共同创造。
                </p>
                <p class="leading-relaxed">
                    从个人开发者到大型企业，从开源项目到私有仓库，GitHub 为软件开发提供了一个前所未有的协作平台。
                </p>
                <div class="border-l-4 border-[#58a6ff] pl-4 py-2 my-6">
                    <p class="italic text-gray-400">
                        "软件开发的未来是开放的、协作的、无国界的。"
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-16 text-center">
            <h3 class="text-xl font-bold mb-6">主要贡献</h3>
            <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div class="github-bg rounded-lg p-6 github-border border">
                    <svg class="w-8 h-8 mb-4 mx-auto text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    <h4 class="font-bold mb-2">知识共享</h4>
                    <p class="text-gray-400">促进全球开发者之间的知识交流与共享</p>
                </div>
                <div class="github-bg rounded-lg p-6 github-border border">
                    <svg class="w-8 h-8 mb-4 mx-auto text-[#58a6ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <h4 class="font-bold mb-2">协作创新</h4>
                    <p class="text-gray-400">打造全球最大的开发者协作平台</p>
                </div>
            </div>
        </div>
    </div>

    <footer class="text-center py-8 text-gray-400">
        <p>❤️ Thank you, GitHub</p>
        <p class="text-sm mt-2">Made with love for the open source community</p>
    </footer>
</body>
</html>`;

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  
  if (path === '/' || path === '') {
    return new Response(HTML_CONTENT, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    })
  }
  
  // 定义环境变量 GITHUB_USERNAME 和 GITHUB_PAT
  const GITHUB_USERNAME = 'Your_GitHub_Username' // 替换为你的 GitHub 用户名
  const GITHUB_PAT = 'Your_GitHub_PAT' // 替换为你的 GitHub PAT，只开放 repo 权限即可
  
  // 构建 GitHub raw 内容的 URL
  const githubUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}${path}`
  
  // 创建新的请求，添加必要的头部
  const modifiedRequest = new Request(githubUrl, {
    method: request.method,
    headers: {
      ...request.headers,
      'Authorization': `token ${GITHUB_PAT}`,
      'Accept': 'application/vnd.github.v3.raw'
    }
  })
  
  // 发送请求并返回响应
  try {
    const response = await fetch(modifiedRequest)
    
    // 如果响应不成功，抛出错误
    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`)
    }
    
    // 创建新的响应，保留原始内容但移除敏感头部
    const newResponse = new Response(response.body, response)
    newResponse.headers.delete('Authorization')
    
    return newResponse
  } catch (error) {
    return new Response(`Error: ${error.message}`, { status: 500 })
  }
}

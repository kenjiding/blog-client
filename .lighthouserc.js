module.exports = {
  ci: {
    collect: {
      // 指定要测试的本地 URL
      url: ['http://localhost:4000'],
      startServerCommand: 'npm run dev',  // 如果需要的话，指定启动服务器的命令
      numberOfRuns: 3  // 指定 Lighthouse 应该运行多少次测试
    },
    assert: {
      assertions: {
        // 设置你的性能预算
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }]  // FCP 2秒以内
      }
    },
    upload: {
      target: 'temporary-public-storage'  // 将结果上传到临时公共存储，方便查看
    }
  }
};

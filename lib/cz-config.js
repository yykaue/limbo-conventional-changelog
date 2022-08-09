module.exports = {
  // skip any questions you want
  skipQuestions: [],
  // 可选类型
  types: {
    feat: { description: '一个新功能', title: 'Features' },
    fix: { description: '一个bug', title: 'Bug Fixes' },
    docs: { description: '文档增删改', title: 'Documentation' },
    style: { description: '样式修改(空白、格式、缺少分号等)', title: 'Styles' },
    refactor: { description: '既不修复bug也不添加新功能的更改', title: 'Code Refactoring' },
    perf: { description: '性能优化', title: 'Performance Improvements' },
    test: { description: '增加测试', title: 'Tests' },
    build: { description: '影响构建系统或外部依赖项的更改(示例范围:gulp、broccoli、npm)', title: 'Builds' },
    ci: { description: '对CI配置文件和脚本的更改(示例范围:Travis, Circle, BrowserStack, SauceLabs)', title: 'Continuous Integrations' },
    chore: { description: '除src目录或测试文件以外的修改', title: 'Chores' },
    revert: { description: '回退历史版本', title: 'Reverts' },
    conflict: { description: '修改冲突', title: 'Conflict' },
    font: { description: '字体文件更新', title: 'Fonts' },
    delete: { description: '删除文件', title: 'Delete Files' },
    stash: { description: '暂存文件', title: 'Stash Files' }
  },
  defaultValue: {
    type: undefined,
    scope: undefined,
    subject: undefined,
    body: undefined,
    isIssueAffected: undefined,
    issues: undefined,
  },
  // override the messages, defaults are as follows
  messages: {
    type: '选择您要提交的更改类型:',
    scope: '这个变化的范围是什么(例如组件或文件名):(按回车键跳过)',
    subjectPrefix: '写一个简短的修改描述 (最多 ',
    subjectSuffix: ' 个字符):\n',
    subjectNone: '缺少修改描述',
    subjectBeyond: '描述内容的长度必须小于或等于 ',
    subjectScope: ' 个字符. 当前长度为 ',
    subjectUnit: ' 个字符.',
    body: '可以提供一个更长的修改描述:(按enter键跳过)\n',
    isBreaking: '有什么重大的变化吗?',
    breakingBody: '一个重大的变化提交需要一个说明。请输入需要提交的说明:\n',
    breakingBodyNone: '主要的变化描述是必须的',
    breaking: '请描述重大的变化内容:\n',
    isIssueAffected: '这个变化会影响任何开放的issues吗?',
    issuesBody: '如果issues已关闭，则提交需要一个说明。请输入需要提交的说明:\n',
    issues: '添加一个已经存在的issues (e.g. "fix #123", "re #123".):\n',
  },
  disableScopeLowerCase: undefined,
  disableSubjectLowerCase: undefined,
  maxHeaderWidth: 100,
  maxLineWidth: 100
}

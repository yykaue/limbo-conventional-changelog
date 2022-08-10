module.exports = {
  // skip any questions you want
  // All Type ['type', 'scope', 'subject', 'body', 'isBreaking', 'breakingBody', 'breaking', 'isIssueAffected', 'issuesBody', 'issues']
  skipQuestions: [], // ['type', 'scope', 'subject', 'body', 'isBreaking', 'isIssueAffected']
  // 可选类型
  types: {
    feat: { description: '新功能、新特性', title: 'Features' },
    fix: { description: '修改 bug', title: 'Bug Fixes' },
    docs: { description: '文档修改', title: 'Documentation' },
    style: { description: '代码格式修改, 注意不是 css 修改（例如分号修改）', title: 'Styles' },
    refactor: { description: '代码重构（重构，在不影响代码内部行为、功能下的代码修改）', title: 'Code Refactoring' },
    perf: { description: '性能优化（更改代码，以提高性能）', title: 'Performance Improvements' },
    test: { description: '测试用例新增、修改', title: 'Tests' },
    build: { description: '影响项目构建或依赖项修改(示例范围:gulp、broccoli、npm)', title: 'Builds' },
    ci: { description: '持续集成相关文件修改(示例范围:Travis, Circle, BrowserStack, SauceLabs)', title: 'Continuous Integrations' },
    revert: { description: '回退到某次历史提交', title: 'Reverts' },
    conflict: { description: '修改冲突', title: 'Conflict' },
    font: { description: '字体文件更新', title: 'Fonts' },
    delete: { description: '删除文件', title: 'Delete Files' },
    stash: { description: '暂存文件', title: 'Stash Files' },
    chore: { description: '其他修改,日常事务（例如将表格中的查看详情改为详情）', title: 'Chores' },
  },
  defaultValue: {
    type: '',
    scope: '',
    subject: '',
    body: '',
    isIssueAffected: '',
    issues: '',
  },
  // override the messages, defaults are as follows
  messages: {
    type: '选择您要提交的更改类型:',
    scope: '影响的范围(例如组件, 文件名, route, component, utils, build等):(按回车键跳过)',
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
  disableScopeLowerCase: false,
  disableSubjectLowerCase: false,
  maxHeaderWidth: 100,
  maxLineWidth: 100
}

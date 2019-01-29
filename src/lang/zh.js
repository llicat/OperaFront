export default {
  route: {
    dashboard: '首页',
    introduction: '简述',
    documentation: '文档',
    guide: '引导页',
    permission: '权限测试页',
    pagePermission: '页面权限',
    directivePermission: '指令权限',
    icons: '图标',
    components: '组件',
    componentIndex: '介绍',
    tinymce: '富文本编辑器',
    markdown: 'Markdown',
    jsonEditor: 'JSON编辑器',
    dndList: '列表拖拽',
    splitPane: 'Splitpane',
    avatarUpload: '头像上传',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'CountTo',
    componentMixin: '小组件',
    backToTop: '返回顶部',
    dragDialog: '拖拽 Dialog',
    dragSelect: '拖拽 Select',
    dragKanban: '可拖拽看板',
    charts: '图表',
    keyboardChart: '键盘图表',
    lineChart: '折线图',
    mixChart: '混合图表',
    example: '综合实例',
    nested: '路由嵌套',
    menu1: '菜单1',
    'menu1-1': '菜单1-1',
    'menu1-2': '菜单1-2',
    'menu1-2-1': '菜单1-2-1',
    'menu1-2-2': '菜单1-2-2',
    'menu1-3': '菜单1-3',
    menu2: '菜单2',
    Table: 'Table',
    dynamicTable: '动态Table',
    dragTable: '拖拽Table',
    inlineEditTable: 'Table内编辑',
    complexTable: '综合Table',
    treeTable: '树形表格',
    customTreeTable: '自定义树表',
    tab: 'Tab',
    form: '表单',
    createArticle: '创建文章',
    editArticle: '编辑文章',
    articleList: '文章列表',
    errorPages: '错误页面',
    page401: '401',
    page404: '404',
    errorLog: '错误日志',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    selectExcel: 'Export Selected',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    theme: '换肤',
    clipboardDemo: 'Clipboard',
    i18n: '国际化',
    externalLink: '外链',
    Message: '消息中心',
    Ali: '阿里云',
    AccountList: '账户列表',
    EcsList: 'ECS列表',
    CdnList: 'CDN列表',
    CdnRefresh: 'CDN刷新',
    Godaddy: 'GODADDY',
    DomainList: '域名列表',
    CertificateList: '证书列表',
    System: '系统设置',
    Parameter: '参数设置',
    Resource: '其他资源',
    Hardware: '硬件',
    HardwareUpload: '硬件上传'
  },
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    message: '消息',
    restPwd: '重置密码',
    github: '项目地址',
    screenfull: '全屏',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },
  documentation: {
    documentation: '文档',
    github: 'Github 地址'
  },
  permission: {
    roles: '你的权限',
    switchRoles: '切换权限',
    tips: '在某些情况下，不适合使用 v-permission。例如：Element-UI 的 Tab 组件或 el-table-column 以及其它动态渲染 dom 的场景。你只能通过手动设置 v-if 来实现。'
  },
  guide: {
    description: '引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于',
    button: '打开引导'
  },
  components: {
    documentation: '文档',
    tinymceTips: '富文本是管理后台一个核心的功能，但同时又是一个有很多坑的地方。在选择富文本的过程中我也走了不少的弯路，市面上常见的富文本都基本用过了，最终权衡了一下选择了Tinymce。更详细的富文本比较和介绍见',
    dropzoneTips: '由于我司业务有特殊需求，而且要传七牛 所以没用第三方，选择了自己封装。代码非常的简单，具体代码你可以在这里看到 @/components/Dropzone',
    stickyTips: '当页面滚动到预设的位置会吸附在顶部',
    backToTopTips1: '页面滚动到指定位置会在右下角出现返回顶部按钮',
    backToTopTips2: '可自定义按钮的样式、show/hide、出现的高度、返回的位置 如需文字提示，可在外部使用Element的el-tooltip元素',
    imageUploadTips: '由于我在使用时它只有vue@1版本，而且和mockjs不兼容，所以自己改造了一下，如果大家要使用的话，优先还是使用官方版本。'
  },
  table: {
    create: '创 建',
    update: '编 辑',
    dynamicTips1: '固定表头, 按照表头顺序排序',
    dynamicTips2: '不固定表头, 按照点击顺序排序',
    dragTips1: '默认顺序',
    dragTips2: '拖拽后顺序',
    title: '标题',
    importance: '重要性',
    type: '类型',
    remark: '点评',
    search: '搜索',
    add: '添加',
    export: '导出',
    reviewer: '审核人',
    id: '序号',
    date: '时间',
    author: '作者',
    readings: '阅读数',
    status: '状 态',
    actions: '操 作',
    edit: '编 辑',
    publish: '发布',
    draft: '草稿',
    delete: '删 除',
    cancel: '取 消',
    confirm: '确 定',
    reset: '重 置',
    allFinish: '批量完成',
    allDeprecated: '批量弃用',
    allNoDeprecated: '取消弃用',
    allDelete: '批量删除',
    refreshCache: '刷新缓存',
    operLog: '操作记录',
    operContent: '操作内容',
    operType: '操作类型',
    operTime: '操作时间',
    refreshType: '刷新类型',
    taskId: '任务ID',
    progress: '进 度',
    url: '路 由',
    alarm: '报 警',
    deprecated: '弃 用',
    unDeprecated: '取消弃用',
    deprecatedData: '弃用数据',
    deprecatedMessage: '注：默认不显示被弃用数据 & 弃用数据不会报警',
    expiring: '即将过期',
    open: '开 启',
    close: '关 闭',
    key: '参数键值',
    systemKey: '系统变量',
    value: '参数值',
    off: '关闭',
    on: '开启',
    upload: '上 传',
    clear: '清 空',
    downloadExample: '下载示例',
    user: {
      username: '用户名',
      oldPwd: '旧的密码',
      newPwd: '新的密码',
      confirmPwd: '确认密码'
    },
    ali: {
      username: '账户名',
      accessKeyId: '密钥ID',
      accessKeySecret: '密钥密码',
      account: {
        noMoney: '余额不足',
        update: '编辑账号',
        create: '创建账号'
      },
      ecs: {
        createdTime: '创建时间',
        expiredTime: '过期时间',
        hostName: '主机名称',
        instance: '实 例',
        publicIps: '公网IP',
        regionId: '地 区',
        stop: '停 止',
        run: '启 动',
        rerun: '重 启',
        free: '释 放',
        actionConfirmT1: '此操作将 ',
        actionConfirmT2: ' 该ECS服务器, 是否继续?',
        ifForce: '强制模式',
        forceTip: '强制模式，会导致云服务器实例当前未保存的数据丢失。',
      }
    },
    resource: {
      username: '用户名',
      password: '密码',
      cabinet: '机柜',
      model: '型号',
      assetNumber: '资产编号',
      sn: 'SN',
      operateSystem: '操作系统',
      effect: '作用',
      externalIp: '外网/专线IP',
      externalMainLine: '外网主线',
      externalBackupLine: '外网备线',
      intranetIp: '内网IP',
      manageCardIp: '管理卡IP',
      mask: '掩码',
      remotePort: '远程端口',
      intranetPort: '内网端口',
      managePort: '管理端口',
      externalPort: '外网/专线端口',
      cpu: 'CPU',
      memory: '内存',
      raid: 'RAID',
      hardDisk: '硬盘',
      power: '电源',
      uNumber: 'U数量',
      remark: '备注'
    }
  },
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  message: {
    success: '成 功',
    operSuccess: '操作成功',
    confirmTitle: '提 示',
    confirm: '确 认',
    cancel: '取 消',
    doing: '执行中...',
    parameter: {
      fixedNoEdit: '系统固定参数不能编辑.',
      fixedNoRemove: '系统固定参数不能删除.',
      valueToOrigin: '参数值恢复成原始值..'
    },
    hardware: {
      fileTooMuch: '请不要上传1M以上大小得文件.',
      dataEmpty: '数据为空,请上传文件.',
      needCabinet: '机柜号不能为空.'
    }
  }
}

const crud = (
  resource: string
): {
  create: string
  read: string
  readBy: string
  update: string
  delete: string
} => ({
  create: `${resource}:create`,
  read: `${resource}:read`,
  readBy: `${resource}:readBy`,
  update: `${resource}:update`,
  delete: `${resource}:delete`
})

const eventKeys = {
  appUpdate: {
    check: 'app-update:check',
    download: 'app-update:download',
    install: 'app-update:install',
    get_detail: 'app-update:get_detail'
  },
  darkMode: {
    toggle: 'dark-mode:toggle',
    updated: 'dark-mode:updated'
  },
  auth: {
    get_his: 'auth:get_his',
    login: 'auth:login',
    logout: 'auth:logout',
    verify_token: 'auth:verify_token',
    register: 'auth:register',
    get_user: 'auth:get_user'
  },
  accounts: {
    ...crud('accounts'),
    readBy_category: 'accounts:readBy_category',
    create_profile: 'accounts:create_profile',
    delete_profile: 'accounts:delete_profile',
    add_proxy: 'accounts:add_proxy',
    remove_proxy: 'accounts:remove_proxy',
    get_cookie: 'accounts:get_cookie',
    check_live: 'accounts:check_live',
    close_chrome: 'accounts:close_chrome',
    export: 'accounts:export',
    login: 'accounts:login'
  },
  categories: {
    ...crud('categories'),
    add_accounts: 'categories:add_accounts',
    get_accounts: 'categories:get_accounts'
  },
  actions: {
    ...crud('actions'),
    start: 'actions:start',
    stop: 'actions:stop',
    export: 'actions:export',
    explorer: 'actions:explorer'
  }
}

export default eventKeys

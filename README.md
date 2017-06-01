# Paging plug-in implemented by Vue
这是由Vue实现的分页插件，Vue对象数据及含义：
data: {
        staticNum:[{id:2,display:false,val:2},{id:3,display:false,val:3},{id:4,display:false,val:4}
            ,{id:5,display:false,val:5},{id:6,display:false,val:6}],
        pageNum:15,
        ellipsis1:false,
        ellipsis2:false,
        left:false,
        right:false,
        lastNum:false,
        preSec:1
    }
    staticNum：创建的5个固定节点
    pageNum：在数据库查询后返回的数据页数
    ellipsis1，ellipsis2：省略号，默认不显示，在页数差到3时出现
    left，right：左箭头和右箭头默认不显示，在页数超过5后自动显示
    preSec：当前所选择节点的ID
    
    分页插件的逻辑实现的有些笨拙，欢迎优化

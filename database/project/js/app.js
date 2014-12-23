var html;
(function (html) {
    html.bookborrow = '                <div class="page-header">                    <h3>借出图书</h3>                </div>                <form action="#" role="form" class="book-borrow-return">                    <div class="row form-group">                        <div class="col-xs-8">                            <label for="book-borrow-return-user-name">读者姓名</label>                            <input name="book-borrow-return-user-name" type="text" class="form-control" placeholder="读者姓名" />                        </div>                    </div>                    <div class="row form-group">                        <div class="col-xs-4">                            <label for="book-borrow-return-book-no">书籍编码</label>                            <input name="book-borrow-return-book-no" type="text" class="form-control" placeholder="书籍编码" />                        </div>                        <div class="col-xs-4">                            <label for="book-borrow-return-book-title">书籍名称</label>                            <input name="book-borrow-return-book-title" type="text" class="form-control" placeholder="书籍名称" />                        </div>                    </div>                    <div class="user-query-actions row">                        <div class="btn-group col-md-4" role="group">                            <a class="btn btn-success" href="#">借出</a>                        </div>                    </div>                </form>';
    html.bookquery = '                <div class="page-header">                    <h3>查询条件</h3>                </div>                <form action="#" role="form" class="book-query">                    <div class="row form-group">                        <div class="col-xs-4">                            <label for="book-query-title">书籍名称</label>                            <input name="book-query-title" type="text" class="form-control" placeholder="书籍名称" />                        </div>                    </div>                    <div class="row form-group">                        <div class="col-xs-4">                            <label for="book-query-no">书籍编号</label>                            <input name="book-query-no" type="text" class="form-control" placeholder="书籍编号" />                        </div>                        <div class="col-xs-4">                            <label for="book-query-isbn">ISBN 编码</label>                            <input name="book-query-isbn" type="text" class="form-control" placeholder="ISBN 编码" />                        </div>                    </div>                    <div class="book-query-actions row">                        <div class="btn-group col-md-4" role="group">                            <a class="btn btn-success" href="#">查询</a>                        </div>                    </div>                </form>                <div class="book-query-stats row">                    <div class="col-md-12">                        <div class="page-header">                            <h3>查询结果</h3>                        </div>                        <table class="table">                            <thead>                                <tr>                                    <td>书籍名称</td>                                    <td>书籍编号</td>                                    <td>借阅情况</td>                                </tr>                            </thead>                            <tbody>                                <tr>                                    <td>大学数学</td>                                    <td>T 12345</td>                                    <td>已借出</td>                                </tr>                                <tr>                                    <td>大学英语</td>                                    <td>T 67890</td>                                    <td><a href="#">可借阅</a></td>                                </tr>                            </tbody>                        </table>                    </div>                </div>';
    html.readerquery = '                <div class="page-header">                    <h3>查询条件</h3>                </div>                <form action="#" role="form" class="user-query">                    <div class="row form-group">                        <div class="col-xs-4">                            <label for="user-query-name">读者姓名</label>                            <input name="user-query-name" type="text" class="form-control" placeholder="读者姓名" />                        </div>                    </div>                    <div class="row form-group">                        <div class="col-xs-4">                            <label for="user-query-no">读者学号</label>                            <input name="user-query-no" type="text" class="form-control" placeholder="读者学号" />                        </div>                        <div class="col-xs-4">                            <label for="user-query-faculty">读者学院</label>                            <input name="user-query-faculty" type="text" class="form-control" placeholder="读者学院" />                        </div>                    </div>                    <div class="user-query-actions row">                        <div class="btn-group col-md-4" role="group">                            <a class="btn btn-success" href="#">查询</a>                        </div>                    </div>                </form>                <div class="user-query-stats row">                    <div class="col-md-12">                        <div class="page-header">                            <h3>查询结果</h3>                        </div>                        <table class="table">                            <thead>                                <tr>                                    <td>读者姓名</td>                                    <td>读者学号</td>                                    <td>读者学院</td>                                </tr>                            </thead>                            <tbody>                                <tr>                                    <td>张三</td>                                    <td>3112005816</td>                                    <td>计算机学院</td>                                </tr>                                <tr>                                    <td>李四</td>                                    <td>3112005817</td>                                    <td>计算机学院</td>                                </tr>                            </tbody>                        </table>                    </div>                </div>';
    html.overview = '                <div class="page-header">                    <h1>藏书情况</h1>                </div>                <div>                    <p>共有藏书 <%= books %> 册</p>                </div>                <div class="page-header">                    <h1>读者情况</h1>                </div>                <div>                    <p>共有登记读者 <%= users %> 名</p>                </div>';
    html.bookreturn = '                <div class="page-header">                    <h3>归还图书</h3>                </div>                <form action="#" role="form" class="book-borrow-return">                    <div class="row form-group">                        <div class="col-xs-8">                            <label for="book-borrow-return-user-name">读者姓名</label>                            <input name="book-borrow-return-user-name" type="text" class="form-control" placeholder="读者姓名" />                        </div>                    </div>                    <div class="row form-group">                        <div class="col-xs-4">                            <label for="book-borrow-return-book-no">书籍编码</label>                            <input name="book-borrow-return-book-no" type="text" class="form-control" placeholder="书籍编码" />                        </div>                        <div class="col-xs-4">                            <label for="book-borrow-return-book-title">书籍名称</label>                            <input name="book-borrow-return-book-title" type="text" class="form-control" placeholder="书籍名称" />                        </div>                    </div>                    <div class="user-query-actions row">                        <div class="btn-group col-md-4" role="group">                            <a class="btn btn-success" href="#">归还</a>                        </div>                    </div>                </form>';
    html.readeradd = '                <div class="page-header">                    <h3>读者详情</h3>                </div>                <form action="#" role="form" class="user-profile">                    <div class="row form-group">                        <div class="col-xs-4 user-profile-title">                            <label for="user-profile-title">姓名</label>                            <input name="user-profile-title" type="text" class="form-control" placeholder="张三" />                        </div>                        <div class="col-xs-4 user-profile-no">                            <label for="user-profile-no">学号</label>                            <input name="user-profile-no" type="text" class="form-control" placeholder="3112005816" />                        </div>                        <div class="col-xs-4 user-profile-faculty">                            <label for="user-profile-isbn">学院</label>                            <input type="text" class="form-control" placeholder="计算机学院" />                        </div>                    </div>                    <div class="user-profile-actions row">                        <div class="btn-group col-md-4" role="group">                            <a class="btn btn-success" href="#">新增</a>                        </div>                    </div>                </form>                <div class="user-profile-stats row">                    <div class="col-md-12">                        <div class="page-header">                            <h3>持书情况</h3>                        </div>                        <table class="table">                            <thead>                                <tr>                                    <td>书籍名称</td>                                    <td>书籍编号</td>                                    <td>借阅时间</td>                                    <td>应归还时间</td>                                </tr>                            </thead>                            <tbody>                                <tr>                                    <td>大学数学</td>                                    <td>TP 12345</td>                                    <td>2014/10/1</td>                                    <td>2014/11/5</td>                                </tr>                                <tr>                                    <td>大学英语</td>                                    <td>TP 67890</td>                                    <td>2014/11/12</td>                                    <td>2014/12/15</td>                                </tr>                            </tbody>                        </table>                    </div>                    <div class="col-md-12">                        <div class="page-header">                            <h3>借阅记录</h3>                        </div>                        <table class="table">                            <thead>                                <tr>                                    <td>书籍名称</td>                                    <td>书籍编号</td>                                    <td>借阅时间</td>                                    <td>归还时间</td>                                </tr>                            </thead>                            <tbody>                                <tr>                                    <td>大学数学</td>                                    <td>TP 12345</td>                                    <td>2014/9/1</td>                                    <td>2014/10/1</td>                                </tr>                            </tbody>                        </table>                    </div>                </div>';
    html.help = '<article class="help-article">    <h1>图书馆书籍管理系统使用帮助</h1>    <section id="article-overview" class="help-article-section">        <h3>系统概况</h3>        <p>write something...</p>    </section>    <section id="article-borrow-book" class="help-article-section">        <h3>借阅图书</h3>    </section>    <section id="article-borrow-book" class="help-article-section">        <h3>归还图书</h3>    </section>    <section id="article-enter-book" class="help-article-section">        <h3>登记图书</h3>    </section>    <section id="article-enter-user" class="help-article-section">        <h3>登记读者</h3>    </section>    <section id="article-book-profile" class="help-article-section">        <h3>图书详情</h3>    </section>    <section id="article-user-profile" class="help-article-section">        <h3>读者详情</h3>    </section></article>';
    html.bookadd = '                <div class="page-header">                    <h3>图书详情</h3>                </div>                <form action="#" role="form" class="book-profile">                    <div class="row form-group">                        <div class="col-xs-8 book-profile-title">                            <label for="book-profile-title">书籍名称</label>                            <input name="book-profile-title" type="text" class="form-control" placeholder="书籍名称" />                        </div>                        <div class="col-xs-4 book-profile-no">                            <label for="book-profile-no">书籍编码</label>                            <input name="book-profile-no" type="text" class="form-control" placeholder="书籍编码" />                        </div>                    </div>                    <div class="row form-group">                        <div class="col-xs-6 book-profile-isbn">                            <label for="book-profile-isbn">ISBN 编码</label>                            <input type="text" class="form-control" placeholder="ISBN 编码" />                        </div>                    </div>                    <div class="book-profile-actions row">                        <div class="btn-group col-md-4" role="group">                            <a class="btn btn-success" href="#">借出</a>                            <a class="btn btn-success" href="#">归还</a>                            <a class="btn btn-success" href="#">新增</a>                        </div>                    </div>                </form>                <div class="book-profile-stats row">                    <div class="col-md-12">                        <div class="page-header">                            <h3>借阅情况</h3>                        </div>                        <table class="table">                            <thead>                                <tr>                                    <td>借阅时间</td>                                    <td>应归还时间</td>                                    <td>归还时间</td>                                    <td>借阅读者</td>                                </tr>                            </thead>                            <tbody>                                <tr>                                    <td>2014/10/1</td>                                    <td>2014/11/5</td>                                    <td>2014/11/10</td>                                    <td>张三</td>                                </tr>                                <tr>                                    <td>2014/11/12</td>                                    <td>2014/12/15</td>                                    <td>2014/12/1</td>                                    <td>张三</td>                                </tr>                                <tr>                                    <td>2014/12/5</td>                                    <td>2015/1/5</td>                                    <td></td>                                    <td>张三</td>                                </tr>                            </tbody>                        </table>                    </div>                </div>';
})(html || (html = {}));
var sqlQuery;
(function (sqlQuery) {
    sqlQuery.createtable = 'create table book(    no string,    title string,    isbn string,    category string,    description text,    created_at timestamp,    updated_at timestamp,    primary key(no),    unique(isbn));create table user(    no string,    name string,    gender string,    faculty string,    created_at timestamp,    updated_at timestamp,    primary key(no));create table book_borrowing_log(    id integer,    book_no string,    user_no string,    expire_at timestamp,    returned_at timestamp,    created_at timestamp,    foreign key(book_no) references book(no),    foreign key(user_no) references user(no));';
    sqlQuery.inituser = 'insert into user    (no, name, gender, faculty, created_at, updated_at)values    ("3112005816", "张三", "男", "计算机学院", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),    ("3112005817", "李四", "男", "计算机学院", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);';
    sqlQuery.initbook = 'insert into book    (no, title, isbn, category, description, created_at, updated_at)values    ("E0094868", "A first course in database systems", "9787111247333", "", "", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),    ("A0836869", "编译原理", "7302089795", "", "", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),    ("A1840127", "数据库系统概论", "704007494X", "", "", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);';
})(sqlQuery || (sqlQuery = {}));
/// <reference path="type/sql.d.ts" />
/// <reference path="type/jquery.d.ts" />
/// <reference path="type/underscore.d.ts" />
/// <reference path="type/backbone.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="partials/html.ts" />
/// <reference path="partials/sqlQuery.ts" />
// ----------------------------------------------------------------------------
// Models & Collections
// ----------------------------------------------------------------------------
var QueryResultModel = (function (_super) {
    __extends(QueryResultModel, _super);
    function QueryResultModel() {
        _super.apply(this, arguments);
    }
    QueryResultModel.prototype.defaults = function () {
        return {
            // Query statement.
            query: "",
            // Row fields.
            fields: [],
            // Query results.
            results: []
        };
    };
    QueryResultModel.prototype.getQuery = function () {
        return this.get('query');
    };
    QueryResultModel.prototype.getFields = function () {
        return this.get('fields');
    };
    QueryResultModel.prototype.getResults = function () {
        return this.get('results');
    };
    return QueryResultModel;
})(Backbone.Model);
var BookModel = (function (_super) {
    __extends(BookModel, _super);
    function BookModel() {
        _super.apply(this, arguments);
        this.idAttribute = 'no';
    }
    BookModel.prototype.defaults = function () {
        return {
            no: '',
            title: '',
            isbn: '',
            category: '',
            description: '',
            created_at: '',
            updated_at: ''
        };
    };
    return BookModel;
})(Backbone.Model);
var UserModel = (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        _super.apply(this, arguments);
        this.idAttribute = 'no';
    }
    UserModel.prototype.defaults = function () {
        return {
            name: '',
            gender: '',
            faculty: '',
            created_at: '',
            updated_at: ''
        };
    };
    return UserModel;
})(Backbone.Model);
var BaseCollection = (function (_super) {
    __extends(BaseCollection, _super);
    function BaseCollection() {
        _super.apply(this, arguments);
    }
    BaseCollection.prototype.fetch = function (options) {
        options = options ? _.clone(options) : {};
        var rv = DB.prepare('select * from ' + this.table).execute();
        var method = options.reset ? 'reset' : 'set';
        this[method](rv, options);
        this.trigger('sync', this, rv, options);
    };
    return BaseCollection;
})(Backbone.Collection);
var BookCollection = (function (_super) {
    __extends(BookCollection, _super);
    function BookCollection() {
        _super.apply(this, arguments);
        this.table = 'book';
    }
    return BookCollection;
})(BaseCollection);
var UserCollection = (function (_super) {
    __extends(UserCollection, _super);
    function UserCollection() {
        _super.apply(this, arguments);
        this.table = 'user';
    }
    return UserCollection;
})(BaseCollection);
// ----------------------------------------------------------------------------
// DB proxy
// ----------------------------------------------------------------------------
var StatmentProxy = (function () {
    function StatmentProxy(db, queryResultModel, stmtString) {
        this.queryResultModel = queryResultModel;
        this.stmtString = stmtString;
        this.stmt = db.prepare(stmtString);
    }
    StatmentProxy.prototype.bind = function (params) {
        return this.stmt.bind(params);
    };
    StatmentProxy.prototype.execute = function (params) {
        var rv = [], columnNames;
        this.bind(params);
        while (this.stmt.step()) {
            rv.push(this.stmt.getAsObject());
            columnNames = this.stmt.getColumnNames();
        }
        this.queryResultModel.set({
            query: this.stmtString,
            fields: columnNames,
            results: rv
        });
        return rv;
    };
    return StatmentProxy;
})();
// TODO use interface to define db manager.
var DB = {
    db: new SQL.Database(),
    queryResult: new QueryResultModel(),
    run: function (stmt) {
        return this.db.run(stmt);
    },
    exec: function (stmt) {
        return this.db.exec(stmt);
    },
    prepare: function (stmt) {
        return new StatmentProxy(this.db, this.queryResult, stmt);
    }
};
// ----------------------------------------------------------------------------
// Seeder
// ----------------------------------------------------------------------------
var Seeder = (function () {
    function Seeder(db) {
        this.db = db;
    }
    Seeder.prototype.run = function () {
        this.seedTables();
        this.seedBooks();
        this.seedUsers();
    };
    Seeder.prototype.seedTables = function () {
        this.db.exec(sqlQuery.createtable);
    };
    Seeder.prototype.seedBooks = function () {
        this.db.exec(sqlQuery.initbook);
    };
    Seeder.prototype.seedUsers = function () {
        this.db.exec(sqlQuery.inituser);
    };
    return Seeder;
})();
// ----------------------------------------------------------------------------
// Views
// ----------------------------------------------------------------------------
var HeaderView = (function (_super) {
    __extends(HeaderView, _super);
    function HeaderView(options) {
        _super.call(this, options);
        this.$navItems = $('li[role="presentation"]', this.$el);
    }
    HeaderView.prototype.events = function () {
        return {
            "click li[role=presentation] a": "switchView"
        };
    };
    HeaderView.prototype.switchView = function (e) {
        return this.setActiviyView($(e.target.parentElement));
    };
    HeaderView.prototype.switchViewWithTabName = function (tabName) {
        // TODO unifiy views naming scheme.
        var $target = $('li[name=' + tabName + ']');
        if ($target) {
            this.setActiviyView($target);
        }
        return this;
    };
    HeaderView.prototype.setActiviyView = function ($target) {
        this.$navItems.removeClass('active');
        $target.addClass('active');
        return this;
    };
    return HeaderView;
})(Backbone.View);
var StatView = (function (_super) {
    __extends(StatView, _super);
    function StatView(options) {
        _super.call(this, options);
        this.tdTmpl = _.template('<td><%= d %></td>');
        this.trTmpl = _.template('<tr><%= d %></tr>');
        this.queryTmpl = _.template('<pre><%= d %></pre>');
        this.$tableHead = $('#table thead', this.$el);
        this.$tableBody = $('#table tbody', this.$el);
        this.$query = $('#query .query', this.$el);
        this.listenTo(this.model, "change", this.render);
    }
    StatView.prototype.render = function () {
        this.renderQuery();
        this.renderTable();
        this.$el.height(window.innerHeight - 50);
        return this;
    };
    StatView.prototype.renderQuery = function () {
        var q;
        q = this.queryTmpl({ d: this.model.getQuery() });
        this.$query.html(q);
    };
    // TODO refactor
    StatView.prototype.renderTable = function () {
        var rows = [], row = [], fieldName, fields = this.model.getFields(), results = this.model.getResults(), model;
        for (var i = 0; i < fields.length; i++) {
            rows.push(this.tdTmpl({ d: fields[i] }));
        }
        this.$tableHead.html(this.trTmpl({ d: rows.join('') }));
        // Render table rows.
        rows = [];
        for (var i = 0; i < results.length; i++) {
            model = results[i];
            row = [];
            for (var j = 0; j < fields.length; j++) {
                fieldName = fields[j];
                row.push(this.tdTmpl({ d: model[fieldName] }));
            }
            rows.push(this.trTmpl({
                d: row.join('')
            }));
        }
        this.$tableBody.html(rows.join(''));
    };
    return StatView;
})(Backbone.View);
var DashboardView = (function (_super) {
    __extends(DashboardView, _super);
    function DashboardView() {
        _super.apply(this, arguments);
        this.tmpl = _.template(html.overview);
    }
    DashboardView.prototype.render = function () {
        $(this.el).html(this.tmpl({
            books: this.queryBookCount(),
            users: this.queryUserCount()
        }));
        return this;
    };
    // FIXME should separate view & model/collection.
    DashboardView.prototype.queryUserCount = function () {
        var rv = DB.prepare('select count(*) as count from user').execute();
        return rv[0].count;
    };
    DashboardView.prototype.queryBookCount = function () {
        var rv = DB.prepare('select count(*) as count from book').execute();
        return rv[0].count;
    };
    return DashboardView;
})(Backbone.View);
var FormView = (function (_super) {
    __extends(FormView, _super);
    function FormView() {
        _super.apply(this, arguments);
    }
    FormView.prototype.render = function (content) {
        this.$el.html(content);
        return this;
    };
    return FormView;
})(Backbone.View);
// ----------------------------------------------------------------------------
// Route
// ----------------------------------------------------------------------------
var Route = (function (_super) {
    __extends(Route, _super);
    function Route() {
        _super.call(this);
        this.formView = new FormView({ el: $('#form') });
        this.headerView = new HeaderView({ el: $('#header') });
        this.booksColl = new BookCollection();
        this.usersColl = new UserCollection();
        this.booksColl.fetch();
        this.usersColl.fetch();
    }
    Route.prototype.routes = function () {
        return {
            '': 'overview',
            'overview': 'overview',
            'book/borrow': 'bookBorrow',
            'book/return': 'bookReturn',
            'book/query': 'bookQuery',
            'book/add': 'bookAdd',
            'reader/query': 'readerQuery',
            'reader/add': 'readerAdd',
            'help': 'help'
        };
    };
    Route.prototype.overview = function () {
        this.headerView.switchViewWithTabName('overview');
        (new DashboardView({ el: $('#form') })).render();
    };
    Route.prototype.bookBorrow = function () {
        this.formView.render(html.bookborrow);
        this.headerView.switchViewWithTabName('bookborrow');
    };
    Route.prototype.bookReturn = function () {
        this.formView.render(html.bookreturn);
        this.headerView.switchViewWithTabName('bookreturn');
    };
    Route.prototype.bookQuery = function () {
        this.formView.render(html.bookquery);
        this.headerView.switchViewWithTabName('bookquery');
    };
    Route.prototype.bookAdd = function () {
        this.formView.render(html.bookadd);
        this.headerView.switchViewWithTabName('bookadd');
    };
    Route.prototype.readerQuery = function () {
        this.formView.render(html.readerquery);
        this.headerView.switchViewWithTabName('readerquery');
    };
    Route.prototype.readerAdd = function () {
        this.formView.render(html.readeradd);
        this.headerView.switchViewWithTabName('readeradd');
    };
    Route.prototype.help = function () {
        this.formView.render(html.help);
        this.headerView.switchViewWithTabName('help');
    };
    return Route;
})(Backbone.Router);
$(function () {
    new StatView({ el: $('#stats'), model: DB.queryResult });
    (new Seeder(DB)).run();
    new Route();
    Backbone.history.start();
});

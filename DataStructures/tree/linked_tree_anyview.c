/* linked_tree.c: ����ʵ�� */

#include <stdlib.h>
#include <string.h>
#include <stdio.h>

/* �ṹ�嶨�� */
struct tree {
    char *data;
    
    struct tree *parent;
    struct tree *left_child;
    struct tree *right_sibling;
};

/* ADT �嵥 */

/* 
 * ��������ʼ��һ�ÿ���
 *
 * :rtype: struct tree *
 */
struct tree *tree_init();

/* 
 * ����һ�������������ӽ��
 *
 * :param t: �����ٵ���
 */
void tree_destory(struct tree *t);

/*
 * ��һ������Ϊ����
 *
 * .. warning:: ���ͷ������ڵ�
 *
 * :param t: ���ÿյ���
 */
void tree_clear(struct tree *t);

/*
 * ������Ƿ�Ϊ��
 *
 * .. note:: ʱ�临�Ӷ�Ϊ O(1)
 *
 * :param t: ��������
 * :rtype:  0 Ϊ�ǿգ�����Ϊ��
 */
int tree_is_empty(struct tree *t);

/*
 * ��ȡ����ֵ
 *
 * :param t: ����Ľ��
 * :rtype: ���ص��ǽ��ֵ��ͷ��ַ
 */
char *tree_value(struct tree *t);

/*
 * �Խ����и�ֵ
 *
 * .. note:: �Ḵ�ƴ����ֵ�������
 *
 * :param t: ����Ľ��
 * :param data: �����ֵ
 */
void tree_assign(struct tree *t, char *data);

/*
 * ���������½�㵽�� i λ
 *
 * .. note:: ʱ�临�Ӷ�Ϊ O(n)
 * .. note:: �ӽ��� 0 ��ʼ��ţ��������λ��С�� 0 ����뵽�ʼ��
 *           �������λ�ô����ӽ�����������뵽��ĩ��
 *
 * :param t: �������
 * :param child: ������½��
 * :param i: �����λ��
 */
void tree_insert_child(struct tree *t, struct tree *child, int i);

/*
 * ������ɾ�������ص� i �����
 *
 * .. note:: ʱ�临�Ӷ�Ϊ O(n)
 * .. note:: �ӽ��� 0 ��ʼ��ţ����ɾ��λ�ò������򷵻� NULL
 *
 * :param t: �������
 * :param i: ɾ������λ��
 * :rtype: struct tree *
 */
struct tree *tree_delete_child(struct tree *t, int i);

/*
 * �����������
 *
 * :param t: ���������
 * :rtype: �������
 */
int tree_depth(struct tree *t);

/*
 * ��ȡ���ĸ�
 *
 * .. note:: �������Ľ�㲻��������
 *           �򷵻����ĸ���������
 *
 * :param t: �������
 * :rtype: �������
 */
struct tree *tree_root(struct tree *t);

/*
 * ��ȡ���ĸ����
 *
 * .. note:: ����ǰ���û�и��ڵ㣬����������
 *
 * :param t: ����Ľ��
 * :rtype: struct tree *
 */
struct tree *tree_parent(struct tree *t);

/*
 * ��ȡ���������
 *
 * .. note:: ����ǰ���û������ӣ����� NULL
 *
 * :param t: ����Ľ��
 * :rtype: struct tree *
 */
struct tree *tree_left_child(struct tree *t);

/*
 * ��ȡ�������ֵ�
 *
 * .. note:: ����ǰ���û���Ҷ��ӣ����� NULL
 *
 * :param t: ����Ľ��
 * :rtype: struct tree *
 */
struct tree *tree_right_sibling(struct tree *t);

/*
 * ����ִ���ȸ�����
 *
 * :param t: ����������
 * :param visitor: ��������ָ��
 */
void tree_traverse_pre_root(struct tree *t, void (*visitor)(struct tree *));

/*
 * ����ִ�к������
 *
 * :param t: ����������
 * :param visitor: ��������ָ��
 */
void tree_traverse_post_root(struct tree *t, void (*visitor)(struct tree *));

/*
 * ���ַ������崴��һ����
 *
 * .. seealso:: TODO �ַ�������
 *
 * :param s: �ַ�������
 * :rtype: struct tree *
 */
struct tree *tree_from_string(char *s);

/*
 * ���������ַ�����ʽ 
 *
 * .. warning:: ���ص��ַ����ǴӶѷ�����ڴ棬
 *              ʹ�ú���Ҫ�ֶ� free ����
 *
 * :param t: �������
 * :rtype: char *
 */
char *tree_stringify(struct tree *t);


void assert(int cond)
{
    if (!cond) {
        printf("Failed\n");
        exit(-1);
    }
}

char *str_copy(char *str)
{
    int size;
    char *buffer;

    size = strlen(str);
    buffer = (char *) malloc(sizeof(char) * (size + 1));
    strncpy(buffer, str, size);
    buffer[size] = '\0';

    return buffer;
}

char *str_copyn(char *str, int n)
{
    char *buffer;

    buffer = (char *) malloc(sizeof(char) * (n + 1));
    strncpy(buffer, str, n);
    buffer[n] = '\0';

    return buffer;
}

int str_startswith(char *str, char prefix)
{
    return *str == prefix;
}

int str_endswith(char *str, char suffix)
{
    return *(str + strlen(str) - 1) == suffix;
}

char *
strtok(char *s, char *delim)
{
    char *spanp;
    int c, sc;
    char *tok;
    static char *last;


    if (s == NULL && (s = last) == NULL)
        return (NULL);

    /*
     * Skip (span) leading delimiters (s += strspn(s, delim), sort of).
     */
cont:
    c = *s++;
    for (spanp = (char *)delim; (sc = *spanp++) != 0;) {
        if (c == sc)
            goto cont;
    }

    if (c == 0) {        /* no non-delimiter characters */
        last = NULL;
        return (NULL);
    }
    tok = s - 1;

    /*
     * Scan token (scan for delimiters: s += strcspn(s, delim), sort of).
     * Note that delim must have one NUL; we stop if we see that, too.
     */
    for (;;) {
        c = *s++;
        spanp = (char *)delim;
        do {
            if ((sc = *spanp++) == c) {
                if (c == 0)
                    s = NULL;
                else
                    s[-1] = 0;
                last = s;
                return (tok);
            }
        } while (sc != 0);
    }
    /* NOTREACHED */
}

int str_split(char *str, char delim, char ***rv)
{
    int i, tokens_count;
    char **tokens;
    char *c, *p;

    /* ����ָ���� */
    /* �����ڿ�ͷ�ķָ��ַ� */
    for (c = str; *c == delim && *c != '\0'; c++)
        ;
    for (tokens_count = 0, c = c + 1; *c != '\0'; c++)
        if (*c == delim && *(c - 1) != delim)
            tokens_count = tokens_count + 1;
    if (*(c - 1) != delim)
        tokens_count = tokens_count + 1;

    /* ���Ƹ����ָ�� */
    tokens = (char **) malloc(sizeof(char *) * tokens_count);
    for (c = str, i = 0; *c != '\0'; c++)
        if (*c != delim) {
            for (p = c; *p != delim && *p != '\0'; p++)
                ;
            tokens[i] = str_copyn(c, p - c);
            i = i + 1;
            c = p;
        }

    *rv = tokens;
    return tokens_count;
}


char *str_replace(char *from, char *pattern, char *replace)
{
    char *rv;
    char *p, *q, *r;
    int from_len, count, rv_len, pattern_len, replace_len;

    from_len = strlen(from);
    pattern_len = strlen(pattern);
    replace_len = strlen(replace);

    for (count = 0, p = from;
         (q = strstr(p, pattern)) != NULL;
         p = q + pattern_len, count++)
        ;
    rv_len = from_len + count * (replace_len - pattern_len);

    rv = (char *) malloc(sizeof(char) * (rv_len + 1));

    for (r = rv, p = from;
         (q = strstr(p, pattern)) != NULL;
         p = q + pattern_len) {
        memcpy(r, p, q - p);
        r = r + (q - p);
        memcpy(r, replace, replace_len);
        r = r + replace_len;
    }
    strcpy(r, p);

    return rv;
}

struct tree *tree_init()
{
    struct tree *t;

    t = (struct tree *) malloc(sizeof(struct tree));
    t->data = NULL;
    t->parent = NULL;
    t->left_child = NULL;
    t->right_sibling = NULL;

    return t;
}

void tree_destory(struct tree *t)
{
    struct tree *p;
    struct tree *next;

    if (t == NULL)
        return;

    for (p = tree_left_child(t), next = NULL; p != NULL; p = next) {
        next = tree_right_sibling(p);
        tree_destory(p);
    }

    free(t->data);
    free(t);
}

void tree_clear(struct tree *t)
{
    if (t != NULL) {
        free(t->data);
        t->left_child = NULL;
    }
}

int tree_is_empty(struct tree *t)
{
    return ((t == NULL) ||
            (t->data == NULL && tree_left_child(t) == NULL));
}

char *tree_value(struct tree *t)
{
    if (t == NULL)
        return NULL;
    return t->data;
}

void tree_assign(struct tree *t, char *data)
{
    if (t == NULL || data == NULL)
        return;
    
    t->data = str_copy(data);
}

void tree_insert_child(struct tree *t, struct tree *child, int i)
{
    int j;
    struct tree fake;
    struct tree *p;

    if (i < 0)
        i = 0;

    for (fake.right_sibling = tree_left_child(t), p = &fake, j = 0;
         j < i && tree_right_sibling(p) != NULL;
         p = tree_right_sibling(p), j++)
        ;

    child->right_sibling = tree_right_sibling(p);
    p->right_sibling = child;
    p->parent = t;
    t->left_child = tree_right_sibling(&fake);
}

struct tree *tree_delete_child(struct tree *t, int i)
{
    int j;
    struct tree fake;
    struct tree *p, *rv;

    if (i < 0)
        return NULL;

    for (fake.right_sibling = tree_left_child(t), p = &fake, j = 0;
         j < i && p != NULL;
         p = tree_right_sibling(p), j++)
        ;

    if (p == NULL)
        return NULL;

    rv = p->right_sibling;
    if (rv != NULL) {
        p->right_sibling = rv->right_sibling;
        
        rv->parent = NULL;
        rv->right_sibling = NULL;
    }

    t->left_child = tree_right_sibling(&fake);

    return rv;
}

int tree_depth(struct tree *t)
{
    struct tree *p;
    int max_depth, sub_depth;

    if (t == NULL || tree_is_empty(t))
        return 0;

    for (p = tree_left_child(t), max_depth = 0;
         p != NULL;
         p = tree_right_sibling(p)) {
        sub_depth = tree_depth(p);
        if (sub_depth > max_depth)
            max_depth = sub_depth;
    }

    return max_depth + 1;
}

struct tree *tree_root(struct tree *t)
{
    struct tree *parent;

    if (t == NULL)
        return NULL;

    while ((parent = tree_parent(t)) != t)
        t = parent;

    return t;
}

struct tree *tree_parent(struct tree *t)
{
    if (t == NULL)
        return NULL;

    if (t->parent == NULL)
        return t;
    return t->parent;
}

struct tree *tree_left_child(struct tree *t)
{
    if (t == NULL)
        return NULL;

    return t->left_child;
}

struct tree *tree_right_sibling(struct tree *t)
{
    if (t == NULL)
        return NULL;

    return t->right_sibling;
}

void tree_traverse_pre_root(struct tree *t, void (*visitor)(struct tree *))
{
    struct tree *p;

    if (t == NULL)
        return;

    visitor(t);

    for (p = tree_left_child(t); p != NULL; p = tree_right_sibling(p))
        tree_traverse_pre_root(p, visitor);
}

void tree_traverse_post_root(struct tree *t, void (*visitor)(struct tree *))
{
    struct tree *p;

    if (t == NULL)
        return;

    for (p = tree_left_child(t); p != NULL; p = tree_right_sibling(p))
        tree_traverse_pre_root(p, visitor);
    
    visitor(t);
}

struct queue {
    char **buffer;
    int l, r;
};

char *queue_pop(struct queue *q)
{
    char *rv;

    assert(q->r - q->l >= 0);
    rv = q->buffer[q->l];
    q->l = q->l + 1;

    return rv;
}

char *queue_first(struct queue *q)
{
    assert(q->r - q->l >= 0);
    return q->buffer[q->l];
}

void queue_enqueue(struct queue *q, char *value)
{
    q->r = q->r + 1;
    q->buffer[q->r] = str_copy(value);
}

struct queue *queue_init(char **values, int count)
{
    int i;
    struct queue *q;
    
    q = (struct queue *) malloc(sizeof(struct queue));
    q->l = 0;
    q->r = -1;
    q->buffer = (char **) malloc(sizeof(char *) * count);
    for (i = 0; i< count; i++)
        queue_enqueue(q, values[i]);

    return q;
}

void queue_destory(struct queue *q)
{
    int i;

    for (i = 0; i < q->r; i++)
        free(q->buffer[i]);
    free(q->buffer);
}

struct queue *tokenize(char *s)
{
    int tokens_count, i;
    char *replaced;
    char **tokens;
    struct queue *q;

    replaced = str_replace(s, "(", " ( ");
    s = replaced;
    replaced = str_replace(s, ")", " ) ");
    free(s);
    s = replaced;
    tokens_count = str_split(s, ' ', &tokens);
    free(s);

    q = queue_init(tokens, tokens_count);
    for (i = 0; i < tokens_count; i++)
        free(tokens[i]);
    free(tokens);

    return q;
}

struct tree *read_from(struct queue *tokens)
{
    int has_root, child_count;
    char *token;
    struct tree *node, *child;

    token = queue_pop(tokens);
    if (strcmp(token, "(") == 0) {
        node = tree_init();
        has_root = 0;
        child_count = 0;
        while (strcmp(queue_first(tokens), ")")) {
            child = read_from(tokens);
            if (!has_root) {
                has_root = 1;
                tree_assign(node, tree_value(child));
                tree_destory(child);
            } else {
                tree_insert_child(node, child, child_count);
                child_count = child_count + 1;
            }
        }
        queue_pop(tokens);
        return node;
    } else if (strcmp(token, ")") == 0) {
        assert(0);
    } else {
        node = tree_init();
        tree_assign(node, str_copy(token));
        return node;
    }
}

struct tree *tree_from_string(char *s)
{
    struct queue *tokens;
    struct tree *t;

    tokens = tokenize(s);
    t = read_from(tokens);
    queue_destory(tokens);
    
    return t;
}

int tree_stringify_size(struct tree *t)
{
    int size;
    struct tree *c; 

    if (t == NULL)
        return 0;
    
    size = 2 + strlen(tree_value(t));
    for (c = tree_left_child(t);
         c != NULL;
         c = tree_right_sibling(c))
         size = size + tree_stringify_size(c);
    
    return size;
}

char *tree_stringify(struct tree *t)
{
    int size, i;
    char *buf, *child_buf;
    struct tree *c;
    
    if (t == NULL)
        return NULL;
        
    size = tree_stringify_size(t) + 1;    
    buf = (char *) malloc(sizeof(char) * size);
    for (i = 0; i < size; i++)
        buf[i] = 0;
    buf[0] = '(';
    strcat(buf, tree_value(t));
    
    for (c = tree_left_child(t); c != NULL; c = tree_right_sibling(c)) {
        child_buf = tree_stringify(c);
        assert(child_buf != NULL);        
        strcat(buf, child_buf); 
        free(child_buf);
    }
    buf[size - 2] = ')';
        
    return buf;
}

int main()
{
    struct tree *t, *c1, *c2;

    /* test init */
    t = tree_init();
    assert(t != NULL);
    /* Should be an empty tree */
    assert(tree_depth(t) == 0);
    assert(tree_is_empty(t));
    tree_destory(t);

    /* test assign */
    t = tree_init();
    tree_assign(t, "hello");
    /* Should not be an empty tree */
    assert(tree_depth(t) == 1);
    assert(tree_is_empty(t) == 0);
    /* Should have same value */
    assert(strcmp("hello", tree_value(t)) == 0);
    tree_destory(t);

    /* test tree root & parent */
    t = tree_init();
    tree_assign(t, "hello");
    assert(tree_root(t) == t);
    assert(tree_parent(t) == t);
    tree_destory(t);

    /* test tree insert */
    t = tree_init();
    tree_assign(t, "hello");
    c1 = tree_init();
    c2 = tree_init();
    tree_assign(c1, "world");
    tree_assign(c2, "world!");
    /* test insert in the head */
    tree_insert_child(t, c1, -1);
    /* test insert in the tail */
    tree_insert_child(t, c2, 10);
    assert(tree_left_child(t) == c1);
    assert(tree_right_sibling(c1) == c2);
    tree_destory(t);

    /* test tree delete */
    t = tree_init();
    tree_assign(t, "hello");
    c1 = tree_init();
    c2 = tree_init();
    tree_assign(c1, "world");
    tree_assign(c2, "world!");
    tree_insert_child(t, c1, 0);
    tree_insert_child(c1, c2, 0);
    assert(tree_depth(t) == 3);
    assert(tree_depth(c1) == 2);
    assert(tree_depth(c2) == 1);
    assert(tree_delete_child(c1, 0) == c2);
    assert(tree_depth(t) == 2);
    assert(tree_depth(c1) == 1);
    tree_destory(t);

    /* test tree from string */
    t = tree_from_string("(A)");
    assert(tree_depth(t) == 1);
    assert(strcmp(tree_value(t), "A") == 0);
    assert(strcmp(tree_stringify(t), "(A)") == 0);
    tree_destory(t);                        

    t = tree_from_string("(A (B))");
    assert(tree_depth(t) == 2);    
    assert(strcmp(tree_value(t), "A") == 0);
    assert(strcmp(tree_stringify(t), "(A(B))") == 0);
    tree_destory(t);
            
    t = tree_from_string("(A(B D (E))(C (F )))");
    assert(tree_depth(t) == 3);
    assert(strcmp(tree_value(t), "A") == 0);
    assert(strcmp(tree_stringify(t), "(A(B(D)(E))(C(F)))") == 0);
    tree_destory(t);

    printf("All passed.\n");
    
    return 0;
}
// ========== 数据 ==========
var QUESTIONS = [
    { text: '朋友或家人心情不好的时候，我不用对方开口就能感觉到', dimension: '共情力' },
    { text: '我能理解别人没说出来的难处，哪怕他们嘴上说"没事"', dimension: '共情力' },
    { text: '看到别人难过，我心里也会跟着不好受，不是客套', dimension: '共情力' },
    { text: '身边不少人愿意跟我聊心事，说跟我说话踏实', dimension: '共情力' },
    { text: '一群人聊天的时候，我总能照顾到话最少的那个人', dimension: '共情力' },
    { text: '我跟不同年龄的人都聊得来，不管对方二三十还是七八十', dimension: '共情力' },
    { text: '我经常主动给家里人打电话、发消息，惦记着他们', dimension: '共情力' },
    { text: '如果儿子女儿遇到难事，我能做到先听他/她说，而不是急着给主意', dimension: '共情力' },
    { text: '身边的朋友觉得我"懂他们"，有什么事第一个想到找我聊聊', dimension: '共情力' },
    { text: '活到这个岁数，我觉得自己比年轻时候更能理解别人的不容易', dimension: '共情力' },
    { text: '我说话的时候，别人愿意听，觉得我说得有意思', dimension: '表达力' },
    { text: '不管是面对面说话还是打字，我能把事情说得清楚明白', dimension: '表达力' },
    { text: '人多的场合我不怯场，能带动气氛，大家也不觉得冷场', dimension: '表达力' },
    { text: '有人夸过我说话好听或者声音听着舒服', dimension: '表达力' },
    { text: '我对着镜头说话也不紧张，能自然表达', dimension: '表达力' },
    { text: '我心里攒了不少人生经历，很想讲给别人听听', dimension: '表达力' },
    { text: '我觉得自己这一辈子的经历，记下来是有价值的', dimension: '表达力' },
    { text: '不止一个人说过我适合当老师或者当主持人这类工作', dimension: '表达力' },
    { text: '我在熟人面前或陌生人面前，都能大大方方地分享自己的看法', dimension: '表达力' },
    { text: '我乐于把自己的经验传给年轻人，觉得这是一件有意义的事', dimension: '表达力' },
    { text: '想到了什么事，我一般会立刻去做，不习惯拖着', dimension: '行动力' },
    { text: '我能在脑子里把一件事从想法变成具体步骤，然后一步步做完', dimension: '行动力' },
    { text: '遇到问题我喜欢动手解决，光想不干我心里不踏实', dimension: '行动力' },
    { text: '我喜欢干点实际的活儿，比如做饭、收拾家、种花、修修补补', dimension: '行动力' },
    { text: '组织个聚会或者活动的活，交给我我心里有底', dimension: '行动力' },
    { text: '有些事我从没做过，但有机会的话我也愿意试试看', dimension: '行动力' },
    { text: '家里人常说我"闲不住"，老在捣鼓点什么', dimension: '行动力' },
    { text: '退休之后或者现在比较闲了，我已经在琢磨新的目标了', dimension: '行动力' },
    { text: '跟光说不动的人相比，我更像一个"干就完了"的人', dimension: '行动力' },
    { text: '我觉得一个人能不能做成事，关键不是说了多少，是真的去做了', dimension: '行动力' }
];

var RESULT_MAP = {
    '共情力': {
        icon: '🤝',
        tag: '深度共情力 · 社会连接型',
        desc: '你天生善于感知他人情绪，拥有温暖而包容的能量场。',
        suggestion: '· 社区读书会领读员\n· 银发陪诊/陪伴服务\n· 心理热线志愿者',
        reference: '参考北京大学教育学院2025年《老年教育背景下积极老龄化量表的编制与测量》中"社会参与"与"心理智慧"维度。'
    },
    '表达力': {
        icon: '🎙️',
        tag: '表达感染力 · 自我实现型',
        desc: '你拥有用语言、声音或文字触动人心的天赋。',
        suggestion: '· 短视频口播博主\n· 播音/配音/故事会主讲\n· 兴趣课程讲师',
        reference: '参考北京大学教育学院2025年《老年教育背景下积极老龄化量表的编制与测量》中"心理智慧"与"老年学习"维度。'
    },
    '行动力': {
        icon: '🚀',
        tag: '行动执行力 · 主动应对型',
        desc: '你是把想法变成现实的人。',
        suggestion: '· 户外活动领队/健身助教\n· 手工/园艺/烹饪教学\n· 社区活动组织者',
        reference: '参考北京大学教育学院2025年《老年教育背景下积极老龄化量表的编制与测量》中"老年学习"与"社会参与"维度。'
    }
};

var PREMIUM_DATA = {
    '共情力': {
        sideHustle: ['· 银发陪诊师（兼职，时薪60-100元）', '· 社区读书会领读员', '· 心理热线志愿者'],
        clubs: ['· 南京"花样拾光"退休俱乐部', '· 本地老年大学·朗诵班', '· 社区"故事茶馆"'],
        social: ['· "50+故事会"同城沙龙', '· 高端茶话会·人生经验分享'],
        learning: ['· 喜马拉雅"中老年心灵成长"', '· 得到App"人生故事写作"']
    },
    '表达力': {
        sideHustle: ['· 短视频口播博主', '· 线上故事分享主播', '· 兴趣课程讲师'],
        clubs: ['· 南京"年轻族"退休俱乐部', '· 本地老年大学·主持人班', '· "银发演说家"沙龙'],
        social: ['· "50+脱口秀"开放麦', '· 高端演讲俱乐部·银发专场'],
        learning: ['· 喜马拉雅"中老年表达课"', '· 小宇宙"人生经验播客"']
    },
    '行动力': {
        sideHustle: ['· 户外活动领队', '· 手工/园艺/烹饪教学', '· 社区活动组织者'],
        clubs: ['· 本地老年大学·健身/舞蹈班', '· "银发运动营"', '· 手工/园艺兴趣小组'],
        social: ['· "50+户外徒步"同城团', '· 中老年摄影采风团'],
        learning: ['· 适老化健身教练培训', '· 银发创业/实践课程']
    }
};

var CATEGORIES = [
    { key: 'sideHustle', emoji: '🎯', name: '副业/发挥余热' },
    { key: 'clubs', emoji: '🤝', name: '俱乐部/社群' },
    { key: 'social', emoji: '💑', name: '社交/伴侣' },
    { key: 'learning', emoji: '📚', name: '学习/提升' }
];

// ========== 状态 ==========
var currentQuestion = 0;
var scores = { '共情力': 0, '表达力': 0, '行动力': 0 };
var answers = [];
var memberCode = '';
var isUnlocked = false;
var userDimension = '';

function $(id) { return document.getElementById(id); }

// ========== 开始 ==========
function startQuiz() {
    currentQuestion = 0;
    scores = { '共情力': 0, '表达力': 0, '行动力': 0 };
    answers = [];
    $('page-home').classList.remove('active');
    $('page-quiz').classList.add('active');
    renderQuestion();
}

// ========== 渲染题目 ==========
function renderQuestion() {
    var q = QUESTIONS[currentQuestion];
    $('qNumber').textContent = '第 ' + (currentQuestion + 1) + ' 题';
    $('qDimension').textContent = q.dimension;
    $('qText').textContent = q.text;

    var pct = (currentQuestion / QUESTIONS.length * 100);
    $('progressFill').style.width = pct + '%';
    $('progressText').textContent = (currentQuestion + 1) + '/30';

    $('btnPrev').disabled = (currentQuestion === 0);
    var hasAnswer = (answers[currentQuestion] !== undefined);
    $('btnNext').disabled = !hasAnswer;
    $('btnNext').textContent = (currentQuestion === QUESTIONS.length - 1) ? '查看结果 →' : '下一题 →';

    var container = $('optionsContainer');
    container.innerHTML = '';
    var labels = ['A', 'B', 'C'];
    var opts = ['非常符合', '一般符合', '不太符合'];
    for (var i = 0; i < 3; i++) {
        var btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = '<span class="tag">' + labels[i] + '</span> ' + opts[i];
        btn.onclick = (function(idx) { return function() { selectOption(idx); }; })(i);
        if (answers[currentQuestion] === i) btn.classList.add('selected');
        container.appendChild(btn);
    }
}

function selectOption(idx) {
    answers[currentQuestion] = idx;
    var q = QUESTIONS[currentQuestion];
    scores[q.dimension] = (scores[q.dimension] || 0) + (3 - idx);
    var btns = $('optionsContainer').querySelectorAll('.option-btn');
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('selected', i === idx);
    }
    $('btnNext').disabled = false;
}

function goPrev() {
    if (currentQuestion > 0) { currentQuestion--;
        renderQuestion(); }
}

function goNext() {
    if (answers[currentQuestion] === undefined) return;
    if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResult();
    }
}

// ========== 结果 ==========
function showResult() {
    $('page-quiz').classList.remove('active');
    $('page-result').classList.add('active');

    var maxDim = '共情力';
    var maxScore = -1;
    for (var d in scores) {
        if (scores[d] > maxScore) { maxScore = scores[d];
            maxDim = d; }
    }
    userDimension = maxDim;
    var data = RESULT_MAP[maxDim];

    $('resultIcon').textContent = data.icon;
    $('resultTag').textContent = data.tag;
    $('resultDesc').textContent = data.desc;
    $('resultSuggestion').textContent = data.suggestion;
    $('resultReference').textContent = data.reference;

    memberCode = 'DK' + String(Math.floor(100000 + Math.random() * 900000));
    $('memberCode').textContent = memberCode;

    var saved = localStorage.getItem('nspc_unlock');
    if (saved) {
        try { var p = JSON.parse(saved); if (p.code) isUnlocked = true; } catch (e) {}
    }
    updatePremiumUI();
    drawCard(maxDim, data);
}

function updatePremiumUI() {
    var grid = $('premiumGrid');
    grid.innerHTML = '';
    var data = PREMIUM_DATA[userDimension] || PREMIUM_DATA['表达力'];

    for (var c = 0; c < CATEGORIES.length; c++) {
        var cat = CATEGORIES[c];
        var items = data[cat.key] || [];
        var card = document.createElement('div');
        card.className = 'premium-card ' + (isUnlocked ? 'unlocked' : 'locked');
        card.innerHTML = '<div class="emoji">' + cat.emoji + '</div>' +
            '<div class="name">' + cat.name + '</div>' +
            '<div class="count">' + items.length + ' 条</div>';
        grid.appendChild(card);
    }

    var btn = $('btnUnlock');
    var hint = $('memberHint');
    if (isUnlocked) {
        btn.textContent = '✅ 已解锁';
        btn.className = 'btn-premium unlocked-btn';
        btn.disabled = true;
        hint.textContent = '✅ 已解锁 · 可查看下方所有推荐内容';
        showUnlockedContent();
    } else {
        btn.textContent = '💎 0.9克拉 预约解锁全部';
        btn.className = 'btn-premium';
        btn.disabled = false;
        hint.textContent = '🔒 未解锁 · 0.9元解锁后可查看所有推荐';
        $('unlockedContent').classList.add('hidden');
    }
}

function showUnlockedContent() {
    var container = $('unlockedContent');
    container.classList.remove('hidden');
    container.innerHTML = '';
    var data = PREMIUM_DATA[userDimension] || PREMIUM_DATA['表达力'];
    var nameMap = {
        'sideHustle': '🎯 副业/发挥余热',
        'clubs': '🤝 俱乐部/社群',
        'social': '💑 社交/伴侣',
        'learning': '📚 学习/提升'
    };
    for (var c = 0; c < CATEGORIES.length; c++) {
        var cat = CATEGORIES[c];
        var items = data[cat.key] || [];
        if (items.length === 0) continue;
        var div = document.createElement('div');
        div.className = 'section';
        var html = '<div class="label">' + nameMap[cat.key] + '</div>';
        for (var i = 0; i < items.length; i++) {
            html += '<div class="item">' + items[i] + '</div>';
        }
        div.innerHTML = html;
        container.appendChild(div);
    }
}

function handleUnlock() {
    if (isUnlocked) return;
    $('modalOverlay').classList.remove('hidden');
    $('modalTitle').textContent = '🎉 预约成功！';
    $('modalDesc').textContent = '你的会员码是 ' + memberCode + '。上线后第一时间通知你。';
    isUnlocked = true;
    localStorage.setItem('nspc_unlock', JSON.stringify({ code: memberCode, time: Date.now() }));
    updatePremiumUI();
}

function closeModal(e) {
    if (e && e.target && !e.target.closest('.modal-box')) {
        $('modalOverlay').classList.add('hidden');
        return;
    }
    $('modalOverlay').classList.add('hidden');
}

// ========== 名片 ==========
function drawCard(dim, data) {
    var canvas = $('cardCanvas');
    var ctx = canvas.getContext('2d');
    var w = 600,
        h = 400;

    var grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#f7f5f0');
    grad.addColorStop(1, '#ede8e2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#c9a84c';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.fillStyle = '#b8a69b';
    ctx.font = '11px "PingFang SC", sans-serif';
    ctx.fillText('✦ 北欧第二春 · 积极抗衰优势认证', 40, 52);

    ctx.font = '42px sans-serif';
    ctx.fillText(data.icon, 40, 135);

    ctx.fillStyle = '#1a2a3a';
    ctx.font = 'bold 26px "PingFang SC", sans-serif';
    var tw = data.tag.split('·');
    ctx.fillText(tw[0] + ' ·', 100, 115);
    ctx.fillStyle = '#4a4340';
    ctx.font = 'bold 24px "PingFang SC", sans-serif';
    ctx.fillText(tw[1] || '', 100, 148);

    ctx.fillStyle = '#b8a69b';
    ctx.font = '12px "PingFang SC", sans-serif';
    ctx.fillText('认证编号：' + memberCode, 40, 178);

    ctx.strokeStyle = '#e0d7d0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, 200);
    ctx.lineTo(w - 40, 200);
    ctx.stroke();

    ctx.fillStyle = '#4a4340';
    ctx.font = '12px "PingFang SC", sans-serif';
    ctx.fillText('🧭 积极抗衰方向', 40, 228);
    ctx.fillStyle = '#1a2a3a';
    ctx.font = '14px "PingFang SC", sans-serif';
    var lines = data.suggestion.split('\n').filter(function(s) { return s.trim(); });
    var y = 254;
    for (var i = 0; i < lines.length && y < 330; i++) {
        ctx.fillText(lines[i].trim(), 40, y);
        y += 26;
    }

    ctx.fillStyle = '#b8a69b';
    ctx.font = '9px "PingFang SC", sans-serif';
    ctx.fillText('📄 ' + data.reference.slice(0, 44) + '…', 40, h - 32);

    ctx.fillStyle = '#ccc5bf';
    ctx.font = '9px sans-serif';
    ctx.fillText('NSPC·' + memberCode, w - 130, h - 32);

    canvas.dataset.serial = memberCode;
}

function saveCard() {
    var canvas = $('cardCanvas');
    var link = document.createElement('a');
    link.download = '优势名片_' + (canvas.dataset.serial || 'DK') + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function resetQuiz() {
    $('page-result').classList.remove('active');
    $('page-home').classList.add('active');
    currentQuestion = 0;
    scores = { '共情力': 0, '表达力': 0, '行动力': 0 };
    answers = [];
    $('progressFill').style.width = '0%';
}

// 暴露全局
window.startQuiz = startQuiz;
window.goPrev = goPrev;
window.goNext = goNext;
window.saveCard = saveCard;
window.resetQuiz = resetQuiz;
window.handleUnlock = handleUnlock;
window.closeModal = closeModal;

console.log('✅ app.js 加载完成！');

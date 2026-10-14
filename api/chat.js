<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<title>Money Bloom 🩷</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#ff8fab">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Money Bloom">
<link rel="apple-touch-icon" href="icon-192.png">
<link rel="icon" href="icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  :root{
    --pink-1:#fff0f5;
    --pink-2:#ffd9e6;
    --pink-3:#ffb3c9;
    --pink-4:#ff8fab;
    --pink-5:#e75480;
    --deep:#8a2846;
    --text:#5c2438;
    --text-soft:#9a5a72;
    --card:#ffffff;
    --good:#3aa66b;
    --warn:#e0793f;
    --bad:#e05c6b;
    --border:#ffe0ea;
    --shadow: 0 8px 24px rgba(230,90,130,0.12);
    --font-head:'Quicksand', sans-serif;
    --font-body:'Nunito', sans-serif;
  }
  :root:not([data-theme="light"]){
    @media (prefers-color-scheme: dark){
      --pink-1:#2a1620;
      --pink-2:#3a1e2b;
      --pink-3:#4a2438;
      --pink-4:#ff8fab;
      --pink-5:#ff9ec2;
      --deep:#ffc2d6;
      --text:#ffe3ec;
      --text-soft:#d99cb3;
      --card:#341b28;
      --border:#4a2638;
      --shadow: 0 8px 24px rgba(0,0,0,0.35);
    }
  }
  :root[data-theme="dark"]{
    --pink-1:#2a1620;
    --pink-2:#3a1e2b;
    --pink-3:#4a2438;
    --pink-4:#ff8fab;
    --pink-5:#ff9ec2;
    --deep:#ffc2d6;
    --text:#ffe3ec;
    --text-soft:#d99cb3;
    --card:#341b28;
    --border:#4a2638;
    --shadow: 0 8px 24px rgba(0,0,0,0.35);
  }
  *{box-sizing:border-box;}
  body{
    margin:0;
    font-family: var(--font-body);
    background: linear-gradient(160deg, var(--pink-1), var(--pink-2) 60%, var(--pink-1));
    color: var(--text);
    min-height:100vh;
    padding-bottom: 40px;
  }
  .wrap{ max-width: 640px; margin: 0 auto; padding: 18px 16px 8px; }
  header.top{ text-align:center; padding: 10px 0 6px; }
  header.top h1{
    font-family: var(--font-head);
    font-weight:700;
    font-size: 1.7rem;
    color: var(--pink-5);
    margin: 0 0 2px;
    letter-spacing: 0.3px;
  }
  header.top p{ margin:0; color: var(--text-soft); font-size:0.92rem; }

  nav.tabs{
    display:flex;
    gap:6px;
    margin: 14px 0 16px;
    background: var(--card);
    border-radius: 999px;
    padding: 5px;
    box-shadow: var(--shadow);
    overflow-x:auto;
  }
  nav.tabs button{
    flex:1;
    border:none;
    background:transparent;
    padding: 9px 6px;
    border-radius: 999px;
    font-family: var(--font-head);
    font-weight:600;
    font-size:0.82rem;
    color: var(--text-soft);
    cursor:pointer;
    white-space:nowrap;
    transition: all .2s;
  }
  nav.tabs button.active{
    background: linear-gradient(135deg, var(--pink-4), var(--pink-5));
    color:#fff;
    box-shadow: 0 4px 10px rgba(231,84,128,0.35);
  }

  .card{
    background: var(--card);
    border-radius: 20px;
    padding: 18px;
    box-shadow: var(--shadow);
    margin-bottom: 14px;
    border: 1px solid var(--border);
  }
  .card h2{
    font-family: var(--font-head);
    font-size: 1.05rem;
    margin: 0 0 12px;
    color: var(--deep);
    display:flex; align-items:center; gap:6px;
  }

  .summary-grid{ display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:14px; }
  .summary-grid .full{ grid-column: 1 / -1; }
  .stat{
    background: linear-gradient(135deg, var(--pink-1), var(--pink-2));
    border-radius:16px;
    padding: 14px;
    text-align:center;
    border: 1px solid var(--border);
  }
  .stat .label{ font-size:0.72rem; color:var(--text-soft); font-weight:700; text-transform:uppercase; letter-spacing:0.04em;}
  .stat .value{ font-family: var(--font-head); font-size:1.35rem; font-weight:700; color:var(--deep); margin-top:2px;}
  .stat.remaining .value.good{ color: var(--good); }
  .stat.remaining .value.bad{ color: var(--bad); }

  .item-row{
    display:flex; align-items:center; justify-content:space-between;
    padding: 11px 4px; border-bottom: 1px solid var(--border);
    gap:10px;
  }
  .item-row:last-child{ border-bottom:none; }
  .item-row .info{ display:flex; flex-direction:column; }
  .item-row .name{ font-weight:700; font-size:0.95rem; }
  .item-row .freq{ font-size:0.75rem; color:var(--text-soft); }
  .item-row .amt{ font-family: var(--font-head); font-weight:700; color:var(--pink-5); font-size:1rem; white-space:nowrap; }
  .item-row .del{
    border:none; background:var(--pink-1); color:var(--pink-5); width:28px;height:28px;border-radius:50%;
    font-size:0.9rem; cursor:pointer; flex-shrink:0;
  }
  .empty{ text-align:center; color:var(--text-soft); padding: 18px 6px; font-size:0.9rem; }
  .datepill{ font-size:0.72rem; color:var(--pink-5); font-weight:700; margin-top:3px; display:inline-block; }
  .datepill.nodate{ color:var(--warn); font-weight:600; }
  .info-click{ cursor:pointer; }
  .income-expand{ background: linear-gradient(160deg, #fff, var(--pink-1)); border:1.5px solid var(--border); border-radius:14px; padding:12px; margin: 2px 0 10px; }

  form.addform{ display:flex; flex-direction:column; gap:10px; margin-top:10px;}
  form.addform label{ font-size:0.78rem; font-weight:700; color:var(--text-soft); margin-bottom:3px; display:block;}
  form.addform input, form.addform select{
    width:100%; padding: 10px 12px; border-radius:12px; border:1.5px solid var(--border);
    font-family: var(--font-body); font-size:0.95rem; background: var(--pink-1); color:var(--text);
  }
  form.addform input:focus, form.addform select:focus{ outline:2px solid var(--pink-3); }
  .btn{
    border:none; border-radius:14px; padding: 11px 18px; font-family: var(--font-head); font-weight:700;
    font-size:0.9rem; cursor:pointer; color:#fff;
    background: linear-gradient(135deg, var(--pink-4), var(--pink-5));
    box-shadow: 0 4px 10px rgba(231,84,128,0.3);
  }
  .btn.secondary{
    background: var(--pink-1); color: var(--pink-5); box-shadow:none; border:1.5px solid var(--pink-3);
  }
  .btn:disabled{ opacity:0.55; cursor:default; }
  .btn.small{ padding:7px 12px; font-size:0.8rem; border-radius:10px; }
  .row-btns{ display:flex; gap:8px; }

  .goal-card{ border:1.5px solid var(--border); border-radius:16px; padding:14px; margin-bottom:12px; }
  .goal-top{ display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;}
  .goal-top .gname{ font-weight:800; font-family: var(--font-head); color:var(--deep); }
  .goal-top .gamt{ font-size:0.85rem; color: var(--text-soft); }
  .bar-bg{ background: var(--pink-1); border-radius:999px; height:12px; overflow:hidden; border:1px solid var(--border);}
  .bar-fill{ height:100%; background: linear-gradient(90deg, var(--pink-3), var(--pink-5)); border-radius:999px; transition: width .4s; }

  .tip{
    background: linear-gradient(135deg, #fff6f9, var(--pink-1));
    border:1.5px dashed var(--pink-3);
    border-radius:16px; padding:14px; font-size:0.88rem; line-height:1.5; color:var(--text);
  }
  .tip strong{ color: var(--pink-5); }
  .disclaimer{ font-size:0.72rem; color:var(--text-soft); margin-top:8px; font-style:italic; }

  .shot-zone{
    border:2px dashed var(--pink-3); border-radius:16px; padding:20px; text-align:center; color:var(--text-soft);
    font-size:0.85rem; cursor:pointer; background: var(--pink-1);
  }
  .shot-preview{ max-width:100%; border-radius:12px; margin:10px 0; }
  .hidden{ display:none !important; }
  .status-line{ font-size:0.85rem; color:var(--text-soft); margin:8px 0; text-align:center; }
  .pill{ display:inline-block; background:var(--pink-2); color:var(--pink-5); border-radius:999px; padding:2px 10px; font-size:0.72rem; font-weight:700; }

  .trip-card{ border:1.5px solid var(--border); border-radius:16px; padding:14px; margin-bottom:12px; }
  .trip-top{ display:flex; justify-content:space-between; align-items:flex-start; gap:8px; cursor:pointer; }
  .trip-top .tname{ font-weight:800; font-family: var(--font-head); color:var(--deep); font-size:1.02rem; }
  .trip-top .tdest{ font-size:0.82rem; color:var(--text-soft); margin-top:1px; }
  .trip-top .tdates{ font-size:0.78rem; color:var(--pink-5); font-weight:700; margin-top:3px; }
  .trip-toggle{ font-size:1rem; color:var(--pink-4); }
  .trip-body{ margin-top:12px; border-top:1px dashed var(--border); padding-top:12px; }
  .trip-body.hidden{ display:none; }
  .subhead{ font-family:var(--font-head); font-weight:700; font-size:0.85rem; color:var(--pink-5); margin: 10px 0 6px; display:flex; align-items:center; gap:5px; }
  .mini-row{ display:flex; justify-content:space-between; align-items:center; padding:7px 2px; border-bottom:1px solid var(--border); font-size:0.85rem; gap:8px; }
  .mini-row:last-child{ border-bottom:none; }
  .mini-row .mname{ font-weight:700; }
  .mini-row .mdate{ font-size:0.72rem; color:var(--text-soft); display:block; }
  .mini-row .mdel{ border:none;background:var(--pink-1);color:var(--pink-5);width:30px;height:30px;border-radius:50%;font-size:0.8rem;cursor:pointer;flex-shrink:0; }
  .miniform{ display:flex; gap:6px; margin-top:8px; flex-wrap:wrap; }
  .miniform input, .miniform select{ padding:8px 10px; border-radius:10px; border:1.5px solid var(--border); background:var(--pink-1); color:var(--text); font-size:0.85rem; }
  .miniform input[type="text"]{ flex:2; min-width:110px; }
  .miniform input[type="number"], .miniform input[type="date"]{ flex:1; min-width:90px; }
  .checkline{ display:flex; align-items:center; gap:6px; font-size:0.78rem; color:var(--text-soft); margin-top:4px; }
  .trip-summary{ display:flex; gap:8px; margin: 8px 0 4px; flex-wrap:wrap; }
  .trip-summary .mini-stat{ background:var(--pink-1); border-radius:12px; padding:8px 12px; font-size:0.78rem; flex:1; min-width:100px; text-align:center; border:1px solid var(--border); }
  .trip-summary .mini-stat b{ display:block; font-family:var(--font-head); font-size:1rem; color:var(--deep); }

  .cal-month{ font-family:var(--font-head); font-weight:700; color:var(--pink-5); font-size:0.85rem; margin: 16px 0 6px; text-transform:uppercase; letter-spacing:0.04em; }
  .cal-month:first-child{ margin-top:0; }
  .cal-row{ display:flex; justify-content:space-between; align-items:center; padding:9px 4px; border-bottom:1px solid var(--border); font-size:0.88rem; gap:8px; }
  .cal-row:last-child{ border-bottom:none; }
  .cal-row .cdate{ font-size:0.72rem; color:var(--text-soft); display:block; }
  .cal-row .cname{ font-weight:700; }
  .cal-row .camt.income{ color: var(--good); font-weight:700; }
  .cal-row .camt.expense{ color: var(--bad); font-weight:700; }
  .cal-row .cbal{ font-size:0.72rem; color:var(--text-soft); white-space:nowrap; text-align:right; min-width:78px; }

  .cal-daygroup{ border:1.5px solid var(--border); border-radius:14px; padding:12px; margin-bottom:10px; background: linear-gradient(160deg, #fff, var(--pink-1)); }
  .cal-daylabel{ font-family:var(--font-head); font-weight:800; color:var(--pink-5); font-size:0.92rem; margin-bottom:6px; }
  .cal-line{ display:flex; justify-content:space-between; align-items:center; padding:5px 2px; font-size:0.87rem; gap:8px; }
  .cal-line .cname{ font-weight:700; }
  .cal-line .camt.income{ color: var(--good); font-weight:800; }
  .cal-line .camt.expense{ color: var(--bad); font-weight:700; }
  .cal-groupfoot{ display:flex; justify-content:space-between; font-size:0.76rem; color:var(--text-soft); margin-top:6px; padding-top:6px; border-top:1px dashed var(--border); }
  .cal-nextline{ text-align:center; font-size:0.76rem; color:var(--text-soft); margin: 4px 0 12px; font-style:italic; }
  .search-date{ font-size:0.72rem; color:var(--text-soft); margin-right:8px; }

  .group-head:active{ opacity:0.7; }
  .np-card{ text-align:center; background: linear-gradient(150deg, var(--card), var(--pink-1)); border:1.5px solid var(--pink-3); }
  .np-count{ display:flex; flex-direction:column; align-items:center; gap:2px; }
  .np-big{ font-family:var(--font-head); font-weight:700; font-size:3.4rem; line-height:1; color:var(--pink-5); }
  .np-words{ font-family:var(--font-head); font-weight:700; font-size:1.02rem; color:var(--deep); }
  .np-date{ margin-top:8px; font-size:0.86rem; font-weight:700; color:var(--text-soft); }
  .np-list{ margin:12px auto 0; max-width:340px; text-align:left; }
  .np-row{ display:flex; justify-content:space-between; gap:10px; padding:6px 2px; border-top:1px dashed var(--border); font-size:0.9rem; }
  .np-row b{ font-family:var(--font-head); color:var(--good); }
  .np-total{ font-weight:800; }
  .np-after{ margin-top:10px; font-size:0.78rem; color:var(--text-soft); }
  .np-trip{ margin-top:8px; font-family:var(--font-head); font-weight:700; font-size:1.05rem; color:var(--pink-5); }
  .trip-when{ display:inline-block; font-size:0.74rem; font-weight:800; padding:3px 10px; border-radius:999px;
    background:var(--pink-2); color:var(--pink-5); }
  .trip-when-now{ background:var(--good); color:#fff; }
  .trip-when-past{ background:var(--pink-1); color:var(--text-soft); }
  .trip-when-none{ background:var(--pink-1); color:var(--warn); }
  .group-when{
    font-size:0.76rem; font-weight:700; color:var(--pink-5);
    margin:-4px 0 6px 2px; display:flex; align-items:center; gap:6px; flex-wrap:wrap;
  }
  .today-line{
    display:flex; align-items:center; gap:8px;
    margin: 4px 0 12px; color:var(--pink-5); font-weight:800; font-size:0.78rem;
    font-family:var(--font-head);
  }
  .today-line::before, .today-line::after{
    content:""; flex:1; height:2px; border-radius:2px;
    background: linear-gradient(90deg, var(--pink-2), var(--pink-4));
  }
  .cal-daygroup.is-gone{ opacity:0.72; background:var(--pink-1); }
  .cal-daylabel.cal-fold:active{ opacity:0.7; }
  .paid-tick{
    border:1.5px solid var(--pink-3); background:var(--card); color:var(--pink-4);
    width:30px; height:30px; border-radius:50%; font-size:0.9rem; font-weight:800;
    cursor:pointer; flex-shrink:0; line-height:1;
  }
  .paid-tick.is-done{ background:var(--good); border-color:var(--good); color:#fff; }
  .item-row.row-paid .name{ text-decoration: line-through; }
  .cal-line.line-paid .cname{ text-decoration: line-through; }
  .mini-row.row-paid .mname{ text-decoration: line-through; }
  .mini-row.row-paid{ opacity:0.62; }
  .tick-progress{
    display:flex; justify-content:space-between; gap:8px; flex-wrap:wrap;
    margin-top:6px; padding-top:6px; border-top:1px dashed var(--border);
    font-size:0.76rem; color:var(--text-soft);
  }
  .tick-progress b{ font-family:var(--font-head); color:var(--deep); font-size:0.88rem; }
  .cal-line.line-paid{ opacity:0.62; }
  .item-row.row-paid{ opacity:0.62; }
  .backup-nudge{
    display:flex; align-items:center; gap:10px; flex-wrap:wrap;
    background: linear-gradient(135deg, #fff6f9, var(--pink-1));
    border:1.5px dashed var(--pink-3); border-radius:14px;
    padding:10px 12px; margin:4px 0 10px;
  }
  .backup-nudge span{ font-size:0.82rem; font-weight:700; flex:1; min-width:150px; }
  .year-table{ border:1.5px solid var(--border); border-radius:14px; overflow:hidden; margin-bottom:10px; }
  .year-row{
    display:grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap:4px;
    padding:9px 10px; font-size:0.78rem; align-items:center;
    border-bottom:1px solid var(--border); text-align:right;
  }
  .year-row span:first-child{ text-align:left; }
  .year-row:last-child{ border-bottom:none; }
  .year-head{ background:var(--pink-2); font-weight:800; color:var(--deep); font-size:0.7rem;
    text-transform:uppercase; letter-spacing:0.03em; }
  .year-jump{ cursor:pointer; background:var(--card); }
  .year-jump:active{ background:var(--pink-1); }
  .year-jump.is-now{ background:var(--pink-1); }
  .year-name{ font-weight:700; color:var(--deep); }
  .confirm-box{
    border:1.5px solid var(--pink-3); border-radius:14px;
    background: linear-gradient(160deg, #fff, var(--pink-1));
    padding:12px; margin:4px 0 12px;
  }
  .confirm-box .confirm-text{ font-size:0.85rem; line-height:1.45; margin-bottom:10px; }
  .confirm-box .confirm-text b{ color:var(--deep); }
  .group-left{
    background: linear-gradient(160deg, #fff, var(--pink-1));
    border:1.5px solid var(--border); border-radius:14px;
    padding:9px 12px; margin:-2px 0 10px;
  }
  .group-left-sums i{ font-style:normal; color:var(--text-soft); }
  .group-left-sums{
    display:flex; align-items:center; justify-content:center; gap:7px; flex-wrap:wrap;
    font-size:0.76rem; color:var(--text-soft);
  }
  .group-left-total{
    display:flex; align-items:center; justify-content:space-between; gap:8px;
    margin-top:6px; padding-top:6px; border-top:1px dashed var(--border);
    font-size:0.8rem; font-weight:700; color:var(--text);
  }
  .group-left-total b{ font-family:var(--font-head); font-size:1.02rem; }

  .undo-bar{
    position: fixed; left: 50%; transform: translateX(-50%);
    bottom: calc(14px + env(safe-area-inset-bottom, 0px));
    z-index: 50;
    display: flex; align-items: center; gap: 8px;
    background: var(--card);
    border: 1.5px solid var(--pink-3);
    border-radius: 999px;
    padding: 7px 8px 7px 16px;
    box-shadow: 0 6px 20px rgba(230,90,130,0.28);
    max-width: calc(100vw - 32px);
  }
  .undo-bar span{
    font-size:0.84rem; font-weight:700; color:var(--text);
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis; min-width:0;
  }
  .undo-bar .undo-x{
    border:none; background:var(--pink-1); color:var(--pink-5);
    width:28px; height:28px; border-radius:50%; font-size:0.85rem; cursor:pointer; flex-shrink:0;
  }
</style>
</head>
<body>
<div class="wrap">
  <header class="top">
    <h1>🌸 Money Bloom</h1>
    <p>your soft little budget garden</p>
    <button id="installBtn" class="btn small" style="margin-top:10px;display:none;">📲 Add to my phone</button>
  </header>

  <div id="installHelp" class="card hidden" style="text-align:center;">
    <p style="margin:0 0 8px;font-size:0.88rem;">On iPhone: tap the <strong>Share</strong> icon (⬆️) below, then <strong>"Add to Home Screen"</strong>.</p>
    <p style="margin:0;font-size:0.88rem;">On Android/Chrome: tap the menu (⋮) then <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong>.</p>
    <button id="closeInstallHelp" class="btn small secondary" style="margin-top:10px;">Got it 🩷</button>
  </div>

  <nav class="tabs">
    <button data-tab="overview" class="active">🌷 Overview</button>
    <button data-tab="income">💌 Income</button>
    <button data-tab="outgoings">🧾 Outgoings</button>
    <button data-tab="trips">🧳 Trips</button>
    <button data-tab="calendar">📅 Calendar</button>
    <button data-tab="search">🔍 Search</button>
  </nav>

  <div id="tab-overview" class="tabpanel"></div>
  <div id="tab-income" class="tabpanel hidden"></div>
  <div id="tab-outgoings" class="tabpanel hidden"></div>
  <div id="tab-trips" class="tabpanel hidden"></div>
  <div id="tab-calendar" class="tabpanel hidden"></div>
  <div id="tab-search" class="tabpanel hidden"></div>
</div>

<div id="undoBar" class="undo-bar hidden">
  <span id="undoText">Change saved</span>
  <button id="undoBtn" class="btn small">↩️ Undo</button>
  <button id="undoDismiss" class="undo-x" title="Hide">✕</button>
</div>

<script>
const CAP = {};
let state = { incomes: [], expenses: [], goals: [], trips: [], overrides: {}, skips: {}, paidMarks: {} };
let openTripId = null;
let editingItem = { kind: null, id: null };
let editingGoalId = null;
let editingTripEntry = { tripId: null, kind: null, id: null };
let calViewMonth = (()=>{ const d = new Date(); d.setDate(1); d.setHours(0,0,0,0); return d; })();
let editingMonthEntry = null; // itemId|monthKey being edited in the Calendar tab
let addingForDateKey = null; // YYYY-MM-DD currently showing its inline "add to this date" form
let editingIncomePaymentFor = null; // income id whose "Payment" amount is being edited inline in its expansion
let editingTiedItem = null; // key of a tied outgoing currently being edited inline in an income's expansion
let editingTripDetailsId = null; // trip id whose name/destination/dates/budget are being edited
let editingTripPaidFor = null; // {tripId, kind:'accommodation'|'spending'} currently showing its inline "set paid so far" form
let editingTripBudgetFor = null; // {tripId, kind:'accommodation'|'spending'} currently showing its inline "set budget" form
let tripQuickAddFor = null; // {tripId, kind:'accommodation'|'spending'} currently showing its inline "add item" form
let tripPanels = {}; // which of a trip's little dropdowns (upcoming payments, day plan) are open
let undoStack = [];        // recent snapshots, so a change can be taken back
let lastSnapshot = null;   // how things looked before the change being made now
let undoBarDismissed = false;
const UNDO_LIMIT = 25;
let searchQuery = '';
let expandedIncomeId = null; // which income card is expanded to show its tied payment
let incomeViewDate = {}; // incomeId -> ISO date string of the occurrence currently being viewed
let incomeAdding = false; // whether the "add outgoing to this payment" form is open
let overviewAdding = false; // whether the Overview's "add a payment" form is open
let searchEditingItemId = null; // item whose amount is being changed from Search
let searchPaidEditing = false;  // typing a 'paid so far' total in Search
let listAdding = { income:false, outgoings:false }; // the 'add' form at the top of a list
let listAddingTo = null;   // income id whose 'add an outgoing to this payment' form is open
let outgoingGroupOpen = {}; // which payment's outgoings are unfolded on the Outgoings tab
let listConfirmDelete = null; // {kind, id} waiting on 'are you sure?' before deleting
let tiedConfirmDelete = null; // key of a row inside a payment waiting on 'are you sure?'
let yearOpen = false;         // the whole-year panel on the Overview
let restoreOffer = null;      // a loaded backup file waiting to be confirmed
let backupNotice = '';        // a short message after saving or restoring
let forcedChangeLabel = '';   // set when an action knows better than the before/after guess
let calBlockOpen = {};        // which calendar day-blocks are unfolded
// Browsers block confirm() inside an embedded page, so a tap on Delete would
// silently do nothing. These ask in the page itself instead.
let searchConfirm = null;     // {id, list, action:'del'|'stop', name}
let tripConfirmDelete = null; // trip id waiting to be confirmed
let dbRef = null;
let usingLocalFallback = false;
function hasOpenEditor(){
  return !!(
    editingItem.kind || editingGoalId ||
    (editingTripEntry && editingTripEntry.tripId) ||
    editingTripDetailsId || editingTripPaidFor || editingTripBudgetFor || tripQuickAddFor ||
    editingIncomePaymentFor || editingTiedItem || editingMonthEntry || addingForDateKey || incomeAdding ||
    overviewAdding || searchEditingItemId || searchPaidEditing ||
    searchConfirm || tripConfirmDelete || restoreOffer || listConfirmDelete || tiedConfirmDelete ||
    listAdding.income || listAdding.outgoings || listAddingTo
  );
}
let lastLocalWriteAt = 0; // stops an in-flight/late snapshot from reverting a save we just made
let saveFailedNotice = false; // true when the last save couldn't reach the cloud
const SNAPSHOT_SUPPRESS_MS = 5000;
const LOCAL_KEY = "money_bloom_state_v1";
const BACKUP_KEY = "money_bloom_last_backup";
function lastBackupAt(){
  try{ return localStorage.getItem(BACKUP_KEY) || ''; }catch(e){ return ''; }
}
function markBackedUp(){
  try{ localStorage.setItem(BACKUP_KEY, toDateStr(new Date())); }catch(e){}
}
// Returns null when there is nothing to nag about — including when this
// browser won't let us remember, so it can't nag wrongly.
function backupDue(){
  let stored;
  try{ stored = localStorage.getItem(BACKUP_KEY); }
  catch(e){ return null; }
  if(!stored) return { days: null, text: "You haven't saved a backup yet" };
  const then = new Date(stored + "T00:00:00");
  if(isNaN(then.getTime())) return { days: null, text: "You haven't saved a backup yet" };
  const days = Math.floor((Date.now() - then.getTime()) / 86400000);
  if(days < 30) return null;
  const months = Math.floor(days / 30);
  return { days: days, text: months >= 2
    ? ('Your last backup was ' + months + ' months ago')
    : 'Your last backup was over a month ago' };
}

function fmt(n){
  n = Number(n)||0;
  return "£" + n.toLocaleString('en-GB', {minimumFractionDigits:2, maximumFractionDigits:2});
}
function monthlyOf(item){
  const a = Number(item.amount)||0;
  switch(item.frequency){
    case 'weekly': return a * (52/12);
    case 'fourweekly': return a * (13/12);
    case 'monthly': return a;
    case 'oneoff': return a;
    default: return a;
  }
}
function freqLabel(f){
  return {weekly:'per week', fourweekly:'every 4 weeks', monthly:'per month', oneoff:'just once'}[f] || f;
}
function uid(){ return Math.random().toString(36).slice(2,10) + Date.now().toString(36); }

const SEED_DATA = {"incomes":[{"amount":345.8,"date":"2026-10-05","frequency":"fourweekly","id":"inc2","name":"Carer's Allowance"},{"amount":579.6,"date":"2026-10-06","frequency":"fourweekly","id":"inc3","name":"Maleeka DLA"},{"amount":579.6,"date":"2026-09-28","frequency":"fourweekly","id":"inc4","name":"Maliki PIP"},{"amount":458.4,"date":"2026-10-06","frequency":"fourweekly","id":"inc5","name":"Your PIP"},{"amount":1983.52,"date":"2026-09-23","frequency":"monthly","id":"uu09wu81mu9nf2b2","name":"Universal Credit"}],"expenses":[{"amount":636.39,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp1","name":"Rent"},{"amount":12,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp2","name":"Phone"},{"amount":19.48,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp3","name":"Water"},{"amount":155,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp4","name":"Gas/Electric"},{"amount":40,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp5","name":"Internet"},{"amount":400,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp6","name":"Food"},{"amount":200,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp7","name":"Tandem holiday savings"},{"amount":25,"date":"2026-09-23","frequency":"monthly","fromIncome":"inc1","id":"exp8","name":"Vanguard"},{"amount":300,"date":"2026-09-28","frequency":"oneoff","id":"exp10","name":"Butlins spending"},{"amount":300,"date":"2026-10-06","frequency":"oneoff","id":"exp11","name":"Christmas presents"},{"amount":200,"date":"2026-10-23","frequency":"oneoff","id":"exp12","name":"Towards Christmas presents"},{"amount":200,"date":"2026-10-23","frequency":"oneoff","id":"exp13","name":"Holiday savings"},{"amount":200,"date":"2026-10-26","frequency":"oneoff","id":"exp15","name":"Haven spending money"},{"amount":200,"date":"2026-11-03","frequency":"oneoff","id":"exp16","name":"Christmas presents"},{"amount":300,"date":"2026-11-23","frequency":"oneoff","id":"exp17","name":"Christmas presents"},{"amount":200,"date":"2026-11-23","frequency":"oneoff","id":"exp18","name":"Christmas presents (extra)"},{"amount":200,"date":"2026-12-23","frequency":"oneoff","id":"exp19","name":"Christmas food"},{"amount":300,"date":"2027-01-18","frequency":"oneoff","id":"exp20","name":"Maleeka's birthday presents"},{"amount":200,"date":"2027-01-23","frequency":"oneoff","id":"exp21","name":"Maleeka's presents"},{"amount":60,"date":"2027-01-23","frequency":"oneoff","id":"exp22","name":"Flights (large cabin seats)"},{"amount":8,"date":"2027-01-23","frequency":"oneoff","id":"exp23","name":"Oasis zoo bus tickets"},{"amount":100,"date":"2027-02-22","frequency":"oneoff","fromIncome":"inc2","id":"exp24","name":"Tandem Savings"},{"amount":240,"date":"2026-09-23","frequency":"oneoff","id":"exp26","name":"Spending money (12 days)"},{"amount":60,"date":"2026-10-23","frequency":"oneoff","id":"exp28","name":"Spending money (3 days)"},{"amount":140,"date":"2026-10-26","frequency":"oneoff","id":"exp29","name":"Spending money (7 days)"},{"amount":400,"date":"2026-11-03","frequency":"oneoff","id":"exp30","name":"Spending money (20 days)"},{"amount":140,"date":"2026-11-23","frequency":"oneoff","id":"exp31","name":"Spending money (7 days)"},{"amount":420,"date":"2026-12-01","frequency":"oneoff","id":"exp32","name":"Spending money (21 days)"},{"amount":320,"date":"2026-12-23","frequency":"oneoff","id":"exp33","name":"Spending money (to last until next payment)"},{"amount":300,"date":"2026-12-28","frequency":"oneoff","id":"exp34","name":"Spending money (to last until next payment)"},{"amount":100,"date":"2027-01-18","frequency":"oneoff","id":"exp35","name":"Spending money (to last until next payment)"},{"amount":400,"date":"2027-01-26","frequency":"oneoff","id":"exp36","name":"Spending money (20 days)"},{"amount":140,"date":"2027-02-15","frequency":"oneoff","id":"exp37","name":"Spending money (8 days)"},{"amount":540,"date":"2027-02-23","frequency":"oneoff","fromIncome":"inc1","id":"exp38","name":"Spending money (27 days)"},{"amount":140,"date":"2027-03-23","frequency":"oneoff","id":"exp39","name":"Spending money (7 days)"},{"amount":140,"date":"2027-03-15","frequency":"oneoff","id":"exp40","name":"Spending money (7 days)"},{"amount":140,"date":"2027-04-12","frequency":"oneoff","id":"exp41","name":"Spending money (7 days)"},{"amount":60,"date":"2027-04-20","frequency":"oneoff","id":"exp42","name":"Spending money (to last until next payment)"},{"amount":340,"date":"2027-04-23","frequency":"oneoff","id":"exp43","name":"Spending money (17 days)"},{"amount":100,"date":"2027-05-18","frequency":"oneoff","id":"exp44","name":"Spending money (5 days)"},{"amount":300,"date":"2027-05-23","frequency":"oneoff","id":"exp45","name":"Spending money (15 days)"},{"amount":140,"date":"2027-06-07","frequency":"oneoff","id":"exp46","name":"Spending money (7 days)"},{"amount":500,"date":"2027-02-23","frequency":"oneoff","fromIncome":"inc3","id":"exp50","name":"Haven spending money"},{"amount":200,"date":"2027-03-23","frequency":"oneoff","id":"exp51","name":"Grange Park spending money (extra)"},{"amount":300,"date":"2027-04-19","frequency":"oneoff","id":"exp52","name":"Grange Park spending money (extra)"},{"amount":50,"date":"2026-09-23","frequency":"oneoff","id":"jc8mj5hwmu9xcoio","name":"Peter's birthday present"},{"amount":340,"date":"2026-10-06","frequency":"oneoff","id":"exp27","name":"Spending money (17 days)"},{"amount":94,"date":"2026-10-06","frequency":"oneoff","fromIncome":"inc5","id":"5lgasudzmua8djf0","name":"Temu"}],"goals":[],"trips":[{"accommodationBudget":0,"accommodationHidden":true,"destination":"Skegness","endDate":"2026-10-26","id":"trip1","itinerary":[],"name":"Butlins Skegness","payments":[],"spendingBudget":800,"spendingPaidExtra":500,"startDate":"2026-10-23"},{"accommodationBudget":2227.9,"accommodationDueDate":"","destination":"Fuerteventura","endDate":"2027-02-18","id":"trip2","itinerary":[{"cost":0,"date":"2027-02-11","id":"t2i1","label":"Arrival & hotel check-in - Free day"},{"cost":0,"date":"2027-02-12","id":"t2i2","label":"Free day"},{"cost":60,"date":"2027-02-13","id":"t2i3","label":"Zoo (incl. transport, book tickets & bus on official website)"},{"cost":0,"date":"2027-02-14","id":"t2i4","label":"Free day"},{"cost":113.44,"date":"2027-02-15","id":"t2i5","label":"North Day Tour"},{"cost":0,"date":"2027-02-16","id":"t2i6","label":"Free hotel day"},{"cost":93.37,"date":"2027-02-17","id":"t2i7","label":"Highlights Tour with Lunch"},{"cost":0,"date":"2027-02-18","id":"t2i8","label":"Go home - Free day"}],"name":"Barcelo Fuerteventura Castillo","payments":[{"amount":93,"category":"accommodation","date":"2027-02-22","fromIncome":"inc2","id":"t2p1","label":"Towards airport hotels (Tandem)"},{"amount":200,"category":"accommodation","date":"2027-01-23","id":"t2p2","label":"Final transfer toward airport hotel"},{"amount":155,"category":"accommodation","date":"2027-02-10","id":"t2p3","label":"Radisson Blu Stansted"},{"amount":1610.13,"category":"accommodation","date":"2027-02-11","id":"t2p4","label":"Fuerteventura Hotel Balance"},{"amount":137.77,"category":"accommodation","date":"2027-02-18","id":"t2p5","label":"Hampton by Hilton"},{"amount":32,"category":"accommodation","date":"2027-02-11","id":"t2p6","label":"Airport transfer (return) - holidayextras.com"}],"spendingBudget":1400,"spendingDueDate":"","startDate":"2027-02-11"},{"accommodationBudget":1583.25,"accommodationDueDate":"2027-03-31","destination":"Grange Park","endDate":"","id":"trip3","itinerary":[],"name":"Parkdean Highfield Grange","payments":[{"amount":300,"category":"accommodation","date":"2026-10-05","id":"t3p2","label":"Accommodation payment"},{"amount":200,"category":"accommodation","date":"2027-01-25","id":"t3p3","label":"Accommodation payment"},{"amount":300,"category":"spending","date":"2027-03-22","id":"t3p4","label":"Spending money"},{"amount":300,"category":"spending","date":"2027-03-23","id":"t3p5","label":"Spending money"},{"amount":200,"category":"spending","date":"2027-04-19","id":"t3p6","label":"Spending money"},{"amount":200,"category":"spending","date":"2027-05-10","id":"t3p7","label":"Spending money"}],"spendingBudget":1000,"startDate":""},{"accommodationBudget":1344,"accommodationPaidExtra":30,"destination":"Seashore","endDate":"2027-08-27","id":"trip4","itinerary":[{"cost":0,"date":"2027-08-23","id":"t4i1","label":"4 nights - Booking ref 17131682"},{"cost":500,"date":"2027-02-23","id":"t4i2","label":"Spending money (from PIP/DLA)"}],"name":"Haven Seashore","payments":[{"amount":146.01,"category":"accommodation","date":"2026-09-23","id":"t4p1","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2026-10-06","id":"t4p2","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2026-11-03","id":"t4p3","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2026-12-01","id":"t4p4","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2027-01-23","fromIncome":"inc1","id":"t4p5","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2027-03-23","id":"t4p6","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2027-04-23","id":"t4p7","label":"Haven instalment"},{"amount":146.01,"category":"accommodation","date":"2027-05-23","id":"t4p8","label":"Haven instalment"},{"amount":145.92,"category":"accommodation","date":"2027-06-23","id":"t4p9","label":"Final Haven instalment"}],"spendingBudget":500,"startDate":"2027-08-23"}],"overrides":{"exp1|2026-09":636.39,"exp4|2026-09":155,"exp7|2027-02":100},"skips":{},"paidMarks":{}};

function saveLocal(){
  try{ localStorage.setItem(LOCAL_KEY, JSON.stringify(state)); }catch(e){}
}
function loadLocal(){
  try{
    const raw = localStorage.getItem(LOCAL_KEY);
    if(raw){
      state = JSON.parse(raw);
    } else if(typeof SEED_DATA !== 'undefined'){
      state = JSON.parse(JSON.stringify(SEED_DATA));
      saveLocal();
    }
  }catch(e){}
}

function cloneState(){
  try{ return JSON.parse(JSON.stringify(state)); }catch(e){ return null; }
}

async function writeState(){
  lastLocalWriteAt = Date.now();
  if(dbRef){
    try{
      await dbRef.set(state);
      saveFailedNotice = false;
    }catch(e){
      console.warn('db set failed', e);
      saveLocal();
      saveFailedNotice = true;
    }
  } else {
    saveLocal();
  }
  lastSnapshot = cloneState();
  renderAll();
}

// Works out, by comparing before and after, what actually just changed — so the
// undo bar can name it instead of asking "changed something?".
function describeChange(before, after){
  if(!before || !after) return '';
  const same = (x,y)=>{ try{ return JSON.stringify(x)===JSON.stringify(y); }catch(e){ return false; } };

  for(const key of ['incomes','expenses','goals']){
    const b = before[key]||[], a = after[key]||[];
    const bIds = new Set(b.map(x=>x.id)), aIds = new Set(a.map(x=>x.id));
    const gone  = b.filter(x=>!aIds.has(x.id));
    const fresh = a.filter(x=>!bIds.has(x.id));
    if(gone.length === 1 && !fresh.length) return 'Deleted ' + gone[0].name;
    if(gone.length > 1  && !fresh.length) return 'Deleted ' + gone.length + ' things';
    if(fresh.length === 1 && !gone.length) return 'Added ' + fresh[0].name;
    if(fresh.length && gone.length)       return 'Changed ' + (fresh[0].name || gone[0].name);
    const wasById = {}; b.forEach(x=>{ wasById[x.id] = x; });
    const edited = a.filter(x=> wasById[x.id] && !same(wasById[x.id], x));
    if(edited.length === 1){
      const was = wasById[edited[0].id], now = edited[0];
      if(was.name !== now.name)       return 'Renamed ' + was.name + ' to ' + now.name;
      if(Number(was.amount) !== Number(now.amount)) return 'Changed ' + now.name + ' to ' + fmt(now.amount);
      if(!was.endDate && now.endDate) return 'Stopped ' + now.name;
      if(was.endDate && !now.endDate) return 'Restarted ' + now.name;
      return 'Changed ' + now.name;
    }
    if(edited.length > 1) return 'Changed ' + edited.length + ' things';
  }

  const bt = before.trips||[], at = after.trips||[];
  const btIds = new Set(bt.map(t=>t.id)), atIds = new Set(at.map(t=>t.id));
  const goneT  = bt.filter(t=>!atIds.has(t.id));
  const freshT = at.filter(t=>!btIds.has(t.id));
  if(goneT.length === 1)  return 'Deleted the ' + goneT[0].name + ' trip';
  if(freshT.length === 1) return 'Added the ' + freshT[0].name + ' trip';
  const tripWas = {}; bt.forEach(t=>{ tripWas[t.id] = t; });
  const editedT = at.filter(t=> tripWas[t.id] && !same(tripWas[t.id], t));
  if(editedT.length === 1){
    const was = tripWas[editedT[0].id], now = editedT[0];
    const bp = (was.payments||[]).length,  ap = (now.payments||[]).length;
    if(ap < bp) return 'Deleted a payment from ' + now.name;
    if(ap > bp) return 'Added a payment to ' + now.name;
    const bi = (was.itinerary||[]).length, ai = (now.itinerary||[]).length;
    if(ai < bi) return 'Deleted a day from ' + now.name;
    if(ai > bi) return 'Added a day to ' + now.name;
    if(was.name !== now.name) return 'Renamed ' + was.name + ' to ' + now.name;
    if(!!was.spendingHidden !== !!now.spendingHidden) return (now.spendingHidden?'Hid':'Showed') + ' spending money on ' + now.name;
    if(!!was.accommodationHidden !== !!now.accommodationHidden) return (now.accommodationHidden?'Hid':'Showed') + ' holiday cost on ' + now.name;
    return 'Changed ' + now.name;
  }

  const nameForKey = (k)=>{
    const id = String(k).split(/[|@]/)[0];
    if(id.indexOf('trip-') === 0){
      const pid = id.slice(5);
      let found = '';
      (after.trips||[]).forEach(t=>(t.payments||[]).forEach(pm=>{ if(pm.id===pid) found = pm.label || 'a holiday payment'; }));
      return found;
    }
    const item = (after.incomes||[]).concat(after.expenses||[]).find(x=>x.id===id);
    return item ? item.name : '';
  };
  const maps = [
    ['overrides', 'Changed', 'Put back'],
    ['skips',     'Removed', 'Put back'],
    ['paidMarks', 'Ticked off', 'Changed']
  ];
  for(const [mapKey, addedVerb, goneVerb] of maps){
    const bo = before[mapKey]||{}, ao = after[mapKey]||{};
    const addedK = Object.keys(ao).filter(k=> !(k in bo) || !same(bo[k], ao[k]));
    const goneK  = Object.keys(bo).filter(k=> !(k in ao));
    if(addedK.length === 1 && !goneK.length){
      const n = nameForKey(addedK[0]);
      return addedVerb + (n ? ' ' + n : ' something') + (mapKey==='paidMarks' ? '' : ' for one date');
    }
    if(goneK.length === 1 && !addedK.length){
      const n = nameForKey(goneK[0]);
      return goneVerb + (n ? ' ' + n : ' something') + (mapKey==='paidMarks' ? '' : ' for one date');
    }
    const n = addedK.length + goneK.length;
    if(n > 1) return addedVerb + ' ' + n + ' dates';
  }
  return '';
}

async function persist(){
  // Keep how things looked a moment ago, so any change can be taken back.
  if(lastSnapshot){
    let label = forcedChangeLabel;
    if(!label){
      try{ label = describeChange(lastSnapshot, state); }catch(e){ label = ''; }
    }
    undoStack.push({ snapshot: lastSnapshot, label: label });
    forcedChangeLabel = '';
    if(undoStack.length > UNDO_LIMIT) undoStack.shift();
    undoBarDismissed = false;
  }
  await writeState();
}

async function undoLast(){
  const previous = undoStack.pop();
  if(!previous) return;
  state = previous.snapshot;
  await writeState();
}

async function init(){
  try{
    const db = await window.claude?.use?.("db");
    if(db){
      dbRef = db.doc("budget/state");
      dbRef.onSnapshot((snap)=>{
        // Never let a background update interrupt someone mid-edit: swapping
        // in fresh data re-renders the whole page, which would wipe out
        // whatever they've typed into an open form before they get to save it.
        if(hasOpenEditor()){
          return;
        }
        // A snapshot that arrives just after we saved something ourselves can
        // still be carrying the OLD data (the write hasn't caught up yet).
        // Applying it would silently undo the change that was just made, so
        // skip it and let the next real update come through instead.
        if(Date.now() - lastLocalWriteAt < SNAPSHOT_SUPPRESS_MS){
          return;
        }
        if(snap.exists){
          // The data handed back by the sync layer is READ-ONLY. If we store it
          // as-is, editing a trip, payment or amount in place silently does
          // nothing at all, and the save then writes the untouched old values
          // straight back — which looks exactly like "Save doesn't work".
          // Take our own fully editable copy before using any of it.
          let d;
          try{
            d = JSON.parse(JSON.stringify(snap.data()));
          }catch(e){
            d = snap.data() || {};
          }
          state = {
            incomes: Array.isArray(d.incomes) ? d.incomes : [],
            expenses: Array.isArray(d.expenses) ? d.expenses : [],
            goals: Array.isArray(d.goals) ? d.goals : [],
            trips: Array.isArray(d.trips) ? d.trips : [],
            overrides: (d.overrides && typeof d.overrides==='object') ? d.overrides : {},
            skips: (d.skips && typeof d.skips==='object') ? d.skips : {},
            paidMarks: (d.paidMarks && typeof d.paidMarks==='object') ? d.paidMarks : {}
          };
        }
        lastSnapshot = cloneState();
        renderAll();
      }, (err)=>{ console.warn('db error', err); });
    } else {
      usingLocalFallback = true;
      loadLocal();
      lastSnapshot = cloneState();
      renderAll();
    }
  }catch(e){
    usingLocalFallback = true;
    loadLocal();
    lastSnapshot = cloneState();
    renderAll();
  }
  try{
    CAP.assets = await window.claude?.use?.("assets");
  }catch(e){}
  try{
    CAP.sample = await window.claude?.use?.("sample");
  }catch(e){}
  try{
    // Inside the Claude app a plain download link does nothing; saving a file
    // has to go through this. On the website it stays null and the ordinary
    // browser download below is used instead.
    CAP.downloads = await window.claude?.use?.("downloads");
  }catch(e){}
  // Same rule as the background-sync render above: if the app is still
  // finishing its startup checks by the time someone has already opened
  // an edit box, don't redraw the page out from under them.
  if(!hasOpenEditor()){
    renderAll();
  }
}

/* ---------- Tabs ---------- */
document.querySelectorAll('nav.tabs button').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('nav.tabs button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tabpanel').forEach(p=>p.classList.add('hidden'));
    document.getElementById('tab-'+btn.dataset.tab).classList.remove('hidden');
  });
});

/* ---------- Render ---------- */
function renderUndoBar(){
  const bar = document.getElementById('undoBar');
  if(!bar) return;
  const n = undoStack.length;
  if(!n || undoBarDismissed){ bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  const top = undoStack[n-1];
  document.getElementById('undoText').textContent =
    (top && top.label) ? top.label : 'Last change';
}

function renderAll(){
  renderUndoBar();
  renderOverview();
  renderList('income');
  renderList('outgoings');
  renderTrips();
  renderCalendar();
  renderSearch();
}

function totals(forMonth){
  const monthStart = forMonth
    ? new Date(forMonth.getFullYear(), forMonth.getMonth(), 1)
    : (()=>{ const d = new Date(); d.setDate(1); d.setHours(0,0,0,0); return d; })();
  const monthEnd = monthEndOf(monthStart);
  let incMonthly = 0, expMonthly = 0;
  state.incomes.forEach(i=>{
    occurrencesInMonth(i, monthStart, monthEnd).forEach(d=>{
      if(isSkipped(i.id, d)) return;
      incMonthly += getEffectiveAmount(i, d);
    });
  });
  state.expenses.forEach(i=>{
    occurrencesInMonth(i, monthStart, monthEnd).forEach(d=>{
      if(isSkipped(i.id, d)) return;
      expMonthly += getEffectiveAmount(i, d);
    });
  });
  state.trips.forEach(t=>{
    (t.payments||[]).forEach(p=>{
      if(!p.date) return;
      const d = new Date(p.date+"T00:00:00");
      if(d>=monthStart && d<=monthEnd) expMonthly += Number(p.amount)||0;
    });
  });
  return { incMonthly, expMonthly, remaining: incMonthly - expMonthly };
}

// Twelve months starting from this one, so a year can be seen in one go
// instead of tapping "Next" eleven times.
function yearRows(){
  const now = new Date(); now.setDate(1); now.setHours(0,0,0,0);
  const nowKey = monthKeyFromDate(now);
  const rows = [];
  for(let n=0; n<12; n++){
    const m = new Date(now.getFullYear(), now.getMonth()+n, 1);
    const t = totals(m);
    rows.push({
      key: monthKeyFromDate(m),
      label: m.toLocaleDateString('en-GB', {month:'long', year:'numeric'}),
      inc: t.incMonthly, exp: t.expMonthly, left: t.remaining,
      isNow: monthKeyFromDate(m) === nowKey
    });
  }
  return rows;
}

// The next day money lands, counted from today (not the month being viewed).
// Returns { days, date, items:[{name, amount}], total, after:{...}|null }.
function nextPaymentDays(){
  const today = new Date(); today.setHours(0,0,0,0);
  const upcoming = [];
  state.incomes.forEach(inc=>{
    if(!inc.date) return;
    let d = new Date(inc.date + "T00:00:00");
    if(isNaN(d.getTime())) return;
    let guard = 0;
    // walk forward to the first date on or after today that isn't skipped
    while(guard < 400){
      if(inc.endDate && toDateStr(d) > inc.endDate) return;
      if(d >= today && !isSkipped(inc.id, d)){
        upcoming.push({ date: new Date(d), name: inc.name, amount: getEffectiveAmount(inc, d) });
        // and the one after it, for the "after that" line
        let d2 = addInterval(d, inc.frequency), g2 = 0;
        while(inc.frequency !== 'oneoff' && g2 < 60){
          if(inc.endDate && toDateStr(d2) > inc.endDate) break;
          if(!isSkipped(inc.id, d2)){ upcoming.push({ date: new Date(d2), name: inc.name, amount: getEffectiveAmount(inc, d2) }); break; }
          d2 = addInterval(d2, inc.frequency); g2++;
        }
        return;
      }
      if(inc.frequency === 'oneoff') return;
      d = addInterval(d, inc.frequency); guard++;
    }
  });
  if(!upcoming.length) return null;
  upcoming.sort((a,b)=> a.date - b.date);
  const dayGroup = (start)=>{
    const key = toDateStr(start.date);
    const items = upcoming.filter(u=> toDateStr(u.date) === key);
    return {
      date: start.date,
      days: Math.round((start.date - today) / 86400000),
      items, total: items.reduce((t,u)=>t+u.amount, 0)
    };
  };
  const first = dayGroup(upcoming[0]);
  const nextOne = upcoming.find(u=> toDateStr(u.date) !== toDateStr(first.date));
  first.after = nextOne ? dayGroup(nextOne) : null;
  return first;
}

function nextPaymentHtml(){
  const np = nextPaymentDays();
  if(!np) return '';
  const longDate = d => d.toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long'});
  const big = np.days === 0 ? 'Today' : String(np.days);
  const words = np.days === 0 ? 'is payment day 🎉'
              : np.days === 1 ? 'day until your next payment'
              : 'days until your next payment';
  const who = np.items.map(u=>`<div class="np-row"><span>💌 ${escapeHtml(u.name)}</span><b>${fmt(u.amount)}</b></div>`).join('');
  const after = np.after
    ? `<div class="np-after">After that: <b>${np.after.items.map(u=>escapeHtml(u.name)).join(' & ')}</b> on ${np.after.date.toLocaleDateString('en-GB',{weekday:'short', day:'numeric', month:'short'})} · ${np.after.days} day${np.after.days===1?'':'s'} away</div>`
    : '';
  return `
    <div class="card np-card">
      <div class="np-count"><span class="np-big">${big}</span><span class="np-words">${words}</span></div>
      <div class="np-date">📅 ${longDate(np.date)}</div>
      <div class="np-list">${who}
        ${np.items.length > 1 ? `<div class="np-row np-total"><span>Together</span><b>${fmt(np.total)}</b></div>` : ''}
      </div>
      ${after}
    </div>`;
}

function renderOverview(){
  // Shares its month with the Calendar tab, so stepping forward here and then
  // opening the Calendar lands you on the same month.
  const monthStart = calViewMonth;
  const monthEnd = monthEndOf(monthStart);
  const monthKey = monthKeyFromDate(monthStart);
  const monthLabel = monthStart.toLocaleDateString('en-GB', {month:'long', year:'numeric'});
  const isCurrentMonth = monthKey === monthKeyFromDate(new Date());
  const {incMonthly, expMonthly, remaining} = totals(monthStart);
  const el = document.getElementById('tab-overview');
  el.innerHTML = `
    ${nextPaymentHtml()}
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:8px;">
        <button class="btn small secondary" id="ovPrev">← Prev</button>
        <h2 style="margin:0;">🌷 ${monthLabel}${isCurrentMonth?' <span class="pill">now</span>':''}</h2>
        <button class="btn small secondary" id="ovNext">Next →</button>
      </div>
      <div class="summary-grid">
        <div class="stat"><div class="label">Coming in</div><div class="value">${fmt(incMonthly)}</div></div>
        <div class="stat"><div class="label">Going out (incl. holidays)</div><div class="value">${fmt(expMonthly)}</div></div>
        <div class="stat remaining full"><div class="label">Left after everything</div>
          <div class="value ${remaining>=0?'good':'bad'}">${fmt(remaining)}</div>
        </div>
      </div>
      ${!isCurrentMonth ? `<div style="text-align:center;margin:-4px 0 8px;"><button class="btn small secondary" id="ovToday">↩ Back to this month</button></div>`:''}
      <button class="btn small secondary" id="ovYearToggle" style="width:100%;margin-bottom:${yearOpen?'8px':'4px'};text-align:left;">
        ${yearOpen?'▲':'▼'} 📆 The whole year, month by month
      </button>
      ${yearOpen ? `<div class="year-table">
        <div class="year-row year-head">
          <span>Month</span><span>Coming in</span><span>Going out</span><span>Left</span>
        </div>
        ${yearRows().map(r=>`
          <div class="year-row year-jump${r.isNow?' is-now':''}" data-month="${r.key}">
            <span class="year-name">${escapeHtml(r.label)}${r.isNow?' <span class="pill">now</span>':''}</span>
            <span>${fmt(r.inc)}</span>
            <span>${fmt(r.exp)}</span>
            <span style="font-weight:800;color:${r.left<0?'var(--bad)':'var(--good)'};">${fmt(r.left)}</span>
          </div>`).join('')}
        <div class="disclaimer" style="text-align:center;">Tap any month to open it. "Going out" counts holiday payments too.</div>
      </div>` : ''}
      ${(()=>{ const due = backupDue(); return due ? `
      <div class="backup-nudge">
        <span>⏰ ${escapeHtml(due.text)}</span>
        <button class="btn small backup-save-btn">⬇️ Save one now</button>
      </div>` : ''; })()}
      <div class="row-btns" style="margin-top:4px;">
        <button class="btn small secondary" id="ovOpenCal" style="flex:1;">📅 Edit ${monthLabel.split(' ')[0]}'s payments</button>
        <button class="btn small" id="ovAddToggle" style="flex:1;">${overviewAdding?'✕ Cancel':'➕ Add a payment'}</button>
      </div>
      ${overviewAdding ? `
      <form class="addform" id="ovAddForm" style="margin-top:12px;">
        <div>
          <label>What's it called?</label>
          <input type="text" name="name" placeholder="e.g. Christmas presents" required>
        </div>
        <div>
          <label>Amount (£)</label>
          <input type="number" name="amount" step="0.01" min="0" required>
        </div>
        <div>
          <label>Income or outgoing?</label>
          <select name="kind">
            <option value="expense">Outgoing (spending)</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label>How often?</label>
          <select name="frequency">
            <option value="oneoff">Just this once</option>
            <option value="monthly">Every month</option>
            <option value="fourweekly">Every 4 weeks</option>
            <option value="weekly">Every week</option>
          </select>
        </div>
        <div>
          <label>Date within ${monthLabel}</label>
          <input type="date" name="date" min="${toDateStr(monthStart)}" max="${toDateStr(monthEnd)}" value="${toDateStr(monthStart)}" required>
        </div>
        <button type="submit" class="btn">Add to ${monthLabel} 🩷</button>
      </form>`:''}
      ${usingLocalFallback ? `<div class="disclaimer">Saved on this device only right now — open this page the same way each time to keep your data.</div>`:''}
      ${saveFailedNotice ? `<div class="disclaimer" style="color:var(--bad);font-weight:700;">⚠️ Your last change couldn't reach the cloud, so it's only saved on this device for now. Try again with a good connection when you can.</div>`:''}
    </div>
    <div class="card">
      <h2>💾 Backup</h2>
      <p style="font-size:0.85rem;color:var(--text-soft);margin-top:-4px;">
        Your budget is saved ${usingLocalFallback ? 'on this device only' : 'to your account'}.
        A backup is a small file you keep yourself — on a new phone, tap Restore and pick it.
      </p>
      ${(()=>{
        const when = lastBackupAt();
        if(!when) return '';
        return `<div class="status-line" style="margin-top:-2px;">Last backup: <b>${fmtDate(when)}</b></div>`;
      })()}
      ${restoreOffer ? `
      <div class="confirm-box">
        <div class="confirm-text">
          This backup holds <b>${restoreOffer.counts.incomes} payments</b>,
          <b>${restoreOffer.counts.expenses} outgoings</b> and
          <b>${restoreOffer.counts.trips} trips</b>${restoreOffer.savedAt?`, saved <b>${escapeHtml(restoreOffer.savedAt)}</b>`:''}.
          <br>Restoring replaces everything you have now.
          <br><span style="color:var(--text-soft);">You can take it back with the ↩️ Undo button afterwards.</span>
        </div>
        <div class="row-btns">
          <button class="btn small" id="restoreYes" style="flex:1;">Yes, restore it</button>
          <button class="btn small secondary" id="restoreNo" style="flex:1;">Cancel</button>
        </div>
      </div>` : `
      <div class="row-btns">
        <button class="btn small secondary backup-save-btn" style="flex:1;">⬇️ Save a backup</button>
        <button class="btn small secondary" id="backupLoad" style="flex:1;">⬆️ Restore a backup</button>
      </div>
      <input type="file" id="backupFile" accept="application/json,.json" class="hidden">`}
      ${backupNotice ? `<div class="status-line" style="font-weight:700;color:var(--pink-5);">${escapeHtml(backupNotice)}</div>` : ''}
    </div>
    <div class="card">
      <h2>📸 Add income from a screenshot</h2>
      <p style="font-size:0.85rem;color:var(--text-soft);margin-top:-4px;">Got a payment notification or bank text? Upload it and I'll try to read the amount for you.</p>
      <div id="shotZone" class="shot-zone">Tap to choose a screenshot 🌸</div>
      <input type="file" id="shotInput" accept="image/*" class="hidden">
      <div id="shotStatus" class="status-line hidden"></div>
      <img id="shotPreview" class="shot-preview hidden">
      <div id="shotConfirm" class="hidden">
        <form class="addform" id="shotForm">
          <div>
            <label>Description</label>
            <input type="text" id="shotDesc" required>
          </div>
          <div>
            <label>Amount (£)</label>
            <input type="number" id="shotAmt" step="0.01" required>
          </div>
          <div>
            <label>How often does this come in?</label>
            <select id="shotFreq">
              <option value="oneoff">One-off (just this time)</option>
              <option value="weekly">Every week</option>
              <option value="fourweekly">Every 4 weeks</option>
              <option value="monthly">Every month</option>
            </select>
          </div>
          <button type="submit" class="btn">Add to my income 💗</button>
        </form>
      </div>
    </div>
  `;
  const goMonth = (delta)=>{
    calViewMonth = new Date(calViewMonth.getFullYear(), calViewMonth.getMonth()+delta, 1);
    overviewAdding = false;
    editingMonthEntry = null;
    // Every tab shares this month, so they all have to move together —
    // otherwise Income and Outgoings quietly keep showing the old one.
    renderAll();
  };
  document.getElementById('ovPrev').addEventListener('click', ()=>goMonth(-1));
  document.getElementById('ovNext').addEventListener('click', ()=>goMonth(1));
  const todayBtn = document.getElementById('ovToday');
  if(todayBtn){
    todayBtn.addEventListener('click', ()=>{
      const n = new Date();
      calViewMonth = new Date(n.getFullYear(), n.getMonth(), 1);
      overviewAdding = false;
      editingMonthEntry = null;
      renderAll();
    });
  }
  document.getElementById('ovYearToggle').addEventListener('click', ()=>{
    yearOpen = !yearOpen;
    renderOverview();
  });
  document.querySelectorAll('#tab-overview .year-jump').forEach(row=>{
    row.addEventListener('click', ()=>{
      const [y,m] = row.dataset.month.split('-').map(Number);
      calViewMonth = new Date(y, m-1, 1);
      yearOpen = false;
      overviewAdding = false;
      editingMonthEntry = null;
      renderAll();
    });
  });
  document.getElementById('ovOpenCal').addEventListener('click', ()=>{
    renderCalendar();
    document.querySelector('nav.tabs button[data-tab="calendar"]').click();
  });
  document.getElementById('ovAddToggle').addEventListener('click', ()=>{
    overviewAdding = !overviewAdding;
    renderOverview();
  });
  const ovForm = document.getElementById('ovAddForm');
  if(ovForm){
    ovForm.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const fd = new FormData(ovForm);
      const name = (fd.get('name')||'').trim();
      const amount = parseFloat(fd.get('amount'));
      const isIncome = fd.get('kind') === 'income';
      const date = fd.get('date');
      if(!name || isNaN(amount) || !date) return;
      const entry = { id: uid(), name, amount, frequency: fd.get('frequency') || 'oneoff', date };
      state[isIncome ? 'incomes' : 'expenses'].push(entry);
      overviewAdding = false;
      await persist();
    });
  }
  setupBackupUI();
  setupScreenshotUI();
}

function setupBackupUI(){
  document.querySelectorAll('.backup-save-btn').forEach(saveBtn=>{
    saveBtn.addEventListener('click', async ()=>{
      const stamp = new Date().toLocaleString('en-GB', {day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit'});
      const payload = { moneyBloomBackup: 1, savedAt: stamp, state: cloneState() };
      const text = JSON.stringify(payload, null, 1);
      const filename = 'money-bloom-backup-' + toDateStr(new Date()) + '.json';

      if(CAP.downloads){
        saveBtn.disabled = true;
        try{
          await CAP.downloads.save({ filename: filename, data: text });
          markBackedUp();
          backupNotice = 'Backup saved — keep it somewhere safe 🩷';
        }catch(err){
          const code = err && err.code;
          if(code === 'declined')          backupNotice = 'No backup saved.';
          else if(code === 'rate_limited') backupNotice = 'Give it a moment, then tap again.';
          else                             backupNotice = "Couldn't save it here — try the same button on your own website.";
        }
        saveBtn.disabled = false;
        renderOverview();
        return;
      }

      // An ordinary browser (your website): a normal download.
      let url = '', revoke = false;
      try{
        url = URL.createObjectURL(new Blob([text], {type:'application/json'}));
        revoke = true;
      }catch(e){
        // Some in-app browsers don't do blob links; this works anywhere.
        try{ url = 'data:application/json;charset=utf-8,' + encodeURIComponent(text); }catch(e2){ url = ''; }
      }
      if(url){
        try{
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          if(revoke) setTimeout(()=>{ try{ URL.revokeObjectURL(url); }catch(e){} }, 2000);
          markBackedUp();
          backupNotice = 'Backup saved — keep it somewhere safe 🩷';
        }catch(e){
          backupNotice = "Couldn't save the file here — try again from your browser rather than an app window.";
        }
      } else {
        backupNotice = "Couldn't save the file here — try again from your browser rather than an app window.";
      }
      renderOverview();
    });
  });

  const loadBtn = document.getElementById('backupLoad');
  const fileInput = document.getElementById('backupFile');
  if(loadBtn && fileInput){
    loadBtn.addEventListener('click', ()=> fileInput.click());
    fileInput.addEventListener('change', ()=>{
      const file = fileInput.files && fileInput.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = ()=>{
        try{
          const parsed = JSON.parse(String(reader.result));
          const st = parsed && parsed.state ? parsed.state : parsed;
          // Only accept something that actually looks like a budget.
          if(!st || !Array.isArray(st.incomes) || !Array.isArray(st.expenses)){
            backupNotice = "That file isn't a Money Bloom backup.";
            restoreOffer = null;
          } else {
            restoreOffer = {
              state: st,
              savedAt: parsed && parsed.savedAt ? parsed.savedAt : '',
              counts: {
                incomes: st.incomes.length,
                expenses: st.expenses.length,
                trips: Array.isArray(st.trips) ? st.trips.length : 0
              }
            };
            backupNotice = '';
          }
        }catch(e){
          backupNotice = "Couldn't read that file — it may be damaged.";
          restoreOffer = null;
        }
        renderOverview();
      };
      reader.onerror = ()=>{ backupNotice = "Couldn't read that file."; renderOverview(); };
      reader.readAsText(file);
    });
  }

  const yes = document.getElementById('restoreYes');
  if(yes){
    yes.addEventListener('click', async ()=>{
      const st = restoreOffer && restoreOffer.state;
      restoreOffer = null;
      if(!st) return;
      state = {
        incomes: Array.isArray(st.incomes) ? st.incomes : [],
        expenses: Array.isArray(st.expenses) ? st.expenses : [],
        goals: Array.isArray(st.goals) ? st.goals : [],
        trips: Array.isArray(st.trips) ? st.trips : [],
        overrides: (st.overrides && typeof st.overrides==='object') ? st.overrides : {},
        skips: (st.skips && typeof st.skips==='object') ? st.skips : {},
        paidMarks: (st.paidMarks && typeof st.paidMarks==='object') ? st.paidMarks : {}
      };
      backupNotice = 'Backup restored 🩷';
      forcedChangeLabel = 'Restored a backup';
      await persist();
    });
  }
  const no = document.getElementById('restoreNo');
  if(no){
    no.addEventListener('click', ()=>{ restoreOffer = null; backupNotice = ''; renderOverview(); });
  }
}

function renderIncomeExpansion(item){
  let viewDateStr = incomeViewDate[item.id];
  if(!viewDateStr){
    const nd = nextOccurrenceFromToday(item);
    viewDateStr = nd ? toDateStr(nd) : item.date;
  }
  const viewDate = new Date(viewDateStr+"T00:00:00");
  const amount = getEffectiveAmount(item, viewDate);
  const canNav = item.frequency !== 'oneoff';

  let tied = [];
  // The app decides for itself which payment each outgoing comes out of.
  const alloc = allocateForDate(viewDateStr);
  state.expenses.forEach(x=>{
    if(occursOnDate(x, viewDateStr) && !isSkipped(x.id, viewDate) && alloc[x.id] === item.id){
      tied.push({ itemId:x.id, name:x.name, amount:getEffectiveAmount(x, viewDate), recurring:x.frequency!=='oneoff', frequency:x.frequency });
    }
  });
  state.trips.forEach(t=>{
    (t.payments||[]).forEach(p=>{
      if(p.date === viewDateStr && alloc['trip-'+p.id] === item.id){
        tied.push({ tripId:t.id, paymentId:p.id, name: t.name+' – '+(p.label||'Payment'), amount:Number(p.amount)||0, isTrip:true });
      }
    });
  });

  const totalTied = tied.reduce((s,x)=>s+x.amount,0);
  const remaining = amount - totalTied;
  // What you've actually ticked off, so the figure moves as you pay things.
  const tickedTotal = tied.reduce((s,x)=>{
    const k = x.isTrip ? ('trip-'+x.paymentId) : (x.itemId + '@' + viewDateStr);
    return isPaidEntry(k, viewDateStr) ? s + x.amount : s;
  }, 0);
  const stillToGo = totalTied - tickedTotal;
  const hasPaymentOverride = Object.prototype.hasOwnProperty.call(state.overrides||{}, overrideKey(item.id, viewDate));

  const paymentBoxHtml = editingIncomePaymentFor === item.id ? `
    <form class="miniform edit-payment-amount-form" data-income="${item.id}" style="grid-column:1/-1;">
      <input type="number" name="amount" value="${amount}" step="0.01" min="0" required style="flex:2;">
      <button type="submit" class="btn small">Save</button>
      <button type="button" class="btn small secondary cancel-edit-payment">Cancel</button>
    </form>
  ` : `
    <div class="mini-stat payment-tap" data-income="${item.id}" style="cursor:pointer;">
      Payment<b>${fmt(amount)}</b>
      <div style="font-size:0.65rem;color:var(--pink-4);margin-top:2px;">${hasPaymentOverride?'edited · tap to change':'tap to edit'}</div>
    </div>
  `;

  const tiedHtml = tied.length ? tied.map(x=>{
    const editKey = x.isTrip ? ('trip-'+x.paymentId) : x.itemId;
    if(tiedConfirmDelete === editKey){
      if(x.isTrip){
        return `
        <div class="confirm-box">
          <div class="confirm-text">Delete <b>${escapeHtml(x.name)}</b> (${fmt(x.amount)}) from your Trips tab?</div>
          <div class="row-btns">
            <button class="btn small tied-del-trip-yes" data-trip="${x.tripId}" data-payment="${x.paymentId}" style="flex:1;background:var(--bad);box-shadow:none;">Yes, delete it</button>
            <button class="btn small secondary tied-del-no" style="flex:1;">Cancel</button>
          </div>
        </div>`;
      }
      if(x.recurring){
        return `
        <div class="confirm-box">
          <div class="confirm-text"><b>${escapeHtml(x.name)}</b> (${fmt(x.amount)}) happens ${freqLabel(x.frequency)}. What do you want to do?</div>
          <div class="row-btns" style="flex-wrap:wrap;">
            <button class="btn small secondary tied-skip-yes" data-item="${x.itemId}" data-date="${viewDateStr}" style="flex:1 0 100%;">Take it off ${fmtDate(viewDateStr)} only</button>
            <button class="btn small tied-del-all-yes" data-item="${x.itemId}" style="flex:1;background:var(--bad);box-shadow:none;">Delete it everywhere</button>
            <button class="btn small secondary tied-del-no" style="flex:1;">Cancel</button>
          </div>
        </div>`;
      }
      return `
      <div class="confirm-box">
        <div class="confirm-text">Delete <b>${escapeHtml(x.name)}</b> (${fmt(x.amount)})? It only happens once, so this removes it completely.</div>
        <div class="row-btns">
          <button class="btn small tied-del-all-yes" data-item="${x.itemId}" style="flex:1;background:var(--bad);box-shadow:none;">Yes, delete it</button>
          <button class="btn small secondary tied-del-no" style="flex:1;">Cancel</button>
        </div>
      </div>`;
    }
    if(editingTiedItem === editKey){
      if(x.isTrip){
        return `
          <form class="miniform edit-tied-trip-form" data-trip="${x.tripId}" data-payment="${x.paymentId}">
            <input type="text" name="label" value="${escapeHtml((x.name.split(' – ')[1])||'')}" placeholder="Label">
            <input type="number" name="amount" value="${x.amount}" step="0.01" min="0" required>
            <button type="submit" class="btn small">Save</button>
            <button type="button" class="btn small secondary cancel-edit-tied">Cancel</button>
          </form>`;
      }
      if(x.recurring){
        return `
          <form class="miniform edit-tied-override-form" data-item="${x.itemId}">
            <span style="flex:1 0 100%;font-size:0.76rem;color:var(--text-soft);">The name and how often it happens change everywhere · the amount changes just this date</span>
            <input type="text" name="name" value="${escapeHtml(x.name)}" required style="flex:2;min-width:120px;">
            <input type="number" name="amount" value="${x.amount}" step="0.01" min="0" required style="flex:1;min-width:90px;">
            <select name="frequency" style="flex:1 0 100%;">
              <option value="monthly" ${x.frequency==='monthly'?'selected':''}>Every month</option>
              <option value="fourweekly" ${x.frequency==='fourweekly'?'selected':''}>Every 4 weeks</option>
              <option value="weekly" ${x.frequency==='weekly'?'selected':''}>Every week</option>
              <option value="oneoff">Just once</option>
            </select>
            <button type="submit" class="btn small">Save</button>
            <button type="button" class="btn small secondary cancel-edit-tied">Cancel</button>
          </form>`;
      }
      return `
        <form class="miniform edit-tied-oneoff-form" data-item="${x.itemId}">
          <span style="flex:1 0 100%;font-size:0.76rem;color:var(--text-soft);">Set this to repeat and it will keep coming back from this date on</span>
          <input type="text" name="name" value="${escapeHtml(x.name)}" required>
          <input type="number" name="amount" value="${x.amount}" step="0.01" min="0" required>
          <select name="frequency" style="flex:1 0 100%;">
            <option value="oneoff" selected>Just once</option>
            <option value="monthly">Every month</option>
            <option value="fourweekly">Every 4 weeks</option>
            <option value="weekly">Every week</option>
          </select>
          <button type="submit" class="btn small">Save</button>
          <button type="button" class="btn small secondary cancel-edit-tied">Cancel</button>
        </form>`;
    }
    const delBtn = `<button class="del tied-del-btn" data-key="${editKey}" title="Remove or delete">✕</button>`;
    const editBtn = `<button class="del edit-tied-btn" data-key="${editKey}" title="Edit">✏️</button>`;
    const tKey = x.isTrip ? ('trip-'+x.paymentId) : (x.itemId + '@' + viewDateStr);
    const tDone = isPaidEntry(tKey, viewDateStr);
    // Two of the same name on the same day is nearly always an accident.
    const dupeFlag = tied.filter(y=>y.name === x.name).length > 1
      ? ' <span class="pill" style="background:var(--warn);color:#fff;text-transform:none;letter-spacing:0;">same name twice</span>' : '';
    return `
      <div class="cal-line${tDone?' line-paid':''}">
        <span class="cname tied-name-tap" data-key="${editKey}"
          style="cursor:pointer;text-decoration:underline dotted var(--pink-3);text-underline-offset:3px;"
          title="Tap to change">${escapeHtml(x.name)}
          <span class="mdate">${x.isTrip ? '🧳 on your Trips tab' : (x.recurring ? '🔁 '+freqLabel(x.frequency) : '1️⃣ just once')} · 📅 ${fmtDate(viewDateStr)}${dupeFlag}</span>
        </span>
        <span style="display:flex;align-items:center;gap:6px;">
          <span class="camt expense">−${fmt(x.amount)}</span>
          <button class="paid-tick${tDone?' is-done':''}" data-key="${tKey}" data-date="${viewDateStr}" title="${tDone?'Paid — tap to untick':'Not paid yet — tap when it goes out'}">${tDone?'✓':'○'}</button>
          ${editBtn}
          ${delBtn}
        </span>
      </div>`;
  }).join('') : `<div class="empty" style="padding:8px 0;">Nothing tied to this payment yet</div>`;

  const addFormHtml = incomeAdding ? `
    <form class="miniform inc-add-form" data-date="${viewDateStr}" data-income="${item.id}" style="margin-top:8px;">
      <input type="text" name="name" placeholder="What's it called?" required>
      <input type="number" name="amount" step="0.01" min="0" placeholder="£" required>
      <select name="frequency" title="How often?">
        <option value="oneoff">Just this once</option>
        <option value="monthly">Every month</option>
        <option value="fourweekly">Every 4 weeks</option>
        <option value="weekly">Every week</option>
      </select>
      <button type="submit" class="btn small">Add</button>
      <button type="button" class="btn small secondary inc-cancel-add">Cancel</button>
    </form>
  ` : `<button class="btn small secondary inc-add-btn" style="margin-top:8px;">➕ Add an outgoing to this payment</button>`;

  return `
    <div class="income-expand">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        ${canNav ? `<button class="btn small secondary inc-prev" data-income="${item.id}">← Prev</button>` : `<span></span>`}
        <span style="font-family:var(--font-head);font-weight:700;color:var(--deep);font-size:0.85rem;">${fmtDate(viewDateStr)}</span>
        ${canNav ? `<button class="btn small secondary inc-next" data-income="${item.id}">Next →</button>` : `<span></span>`}
      </div>
      <div class="trip-summary" style="margin-bottom:8px;">
        ${paymentBoxHtml}
        <div class="mini-stat">Coming out of this<b>${fmt(totalTied)}</b></div>
        <div class="mini-stat">Left from this<b style="${remaining<0?'color:var(--bad);':''}">${fmt(remaining)}</b></div>
      </div>
      ${tied.length ? `<div class="tick-progress">
        <span>✓ ${fmt(tickedTotal)} has gone out</span>
        <span><b>${fmt(stillToGo)}</b> still to go</span>
      </div>` : ''}
      ${hasPaymentOverride ? `<div style="text-align:center;margin:-4px 0 8px;"><button class="btn small secondary reset-payment-override" data-income="${item.id}">↺ Reset to usual ${fmt(item.amount)}</button></div>` : ''}
      <div class="subhead">🧾 What comes out of this payment</div>
      ${tiedHtml}
      ${addFormHtml}
    </div>
  `;
}

// Every screen with ticks uses this one handler, so they can't drift apart.
function wirePaidTicks(scope){
  scope.querySelectorAll('.paid-tick').forEach(b=>{
    if(b.dataset.wired) return;
    b.dataset.wired = '1';
    b.addEventListener('click', async (ev)=>{
      ev.stopPropagation();
      const key = b.dataset.key;
      if(!key) return;
      const now = isPaidEntry(key, b.dataset.date || '');
      state.paidMarks = state.paidMarks || {};
      state.paidMarks[key] = !now;
      const holder = b.closest('.item-row, .cal-line, .mini-row');
      const nameEl = holder && holder.querySelector('.name, .cname, .mname');
      const label = nameEl ? nameEl.textContent.replace(/📅[^·]*·?|edited|changed for this month.*/g,'').trim() : '';
      forcedChangeLabel = (!now ? 'Ticked off ' : 'Unticked ') + (label || 'a payment');
      await persist();
    });
  });
}

function renderList(kind){
  const listKey = kind === 'income' ? 'incomes' : 'expenses';
  const items = state[listKey];
  const el = document.getElementById('tab-'+kind);
  const icon = kind === 'income' ? '💌' : '🧾';
  const title = kind === 'income' ? 'Money coming in' : 'Money going out';
  const monthTotalFor = (mS, mE)=> items.reduce((sum,i)=>
    sum + occurrencesInMonth(i, mS, mE)
      .filter(d=>!isSkipped(i.id, d))
      .reduce((t,d)=>t+getEffectiveAmount(i,d), 0), 0);

  // These tabs show one month at a time, sharing the month with the Overview
  // and Calendar so stepping forward here moves those too.
  const mStart = calViewMonth;
  const mEnd = monthEndOf(mStart);
  const monthLabel = mStart.toLocaleDateString('en-GB', {month:'long', year:'numeric'});
  const monthTotal = monthTotalFor(mStart, mEnd);
  // Trip payments are outgoings too, but they're managed on the Trips tab
  // rather than listed here, so they're called out separately.
  const tripThisMonth = (kind === 'income') ? 0 : state.trips.reduce((s,t)=>
    s + (t.payments||[]).reduce((p,x)=>{
      if(!x.date) return p;
      const d = new Date(x.date+"T00:00:00");
      return (d>=mStart && d<=mEnd) ? p + (Number(x.amount)||0) : p;
    }, 0), 0);
  const isThisMonth = monthKeyFromDate(mStart) === monthKeyFromDate(new Date());

  const dated = items.map(i=>{
    let when = null;
    if(i.date){
      const occ = occurrencesInMonth(i, mStart, mEnd);
      if(occ.length) when = occ[0];
    }
    return { item: i, when };
  }).filter(d=> d.when || !d.item.date);   // keep undated ones visible always
  dated.sort((a,b)=>{
    if(!a.when && !b.when) return 0;
    if(!a.when) return 1;      // undated ones drop to the bottom
    if(!b.when) return -1;
    return a.when - b.when;
  });

  const paidKeyFor = (item, d)=> d ? (item.id + '@' + toDateStr(d)) : '';
  const tickHtml = (key, dateStr)=>{
    if(!key) return '';
    const done = isPaidEntry(key, dateStr);
    const t = kind === 'income'
      ? (done ? 'Arrived — tap to untick' : "Hasn't arrived yet — tap when it lands")
      : (done ? 'Paid — tap to untick' : 'Not paid yet — tap when it goes out');
    return `<button class="paid-tick${done?' is-done':''}" data-key="${key}" data-date="${dateStr||''}"
      title="${t}">${done?'✓':'○'}</button>`;
  };

  const itemHtml = (i, when)=>{
    // Show the date it actually lands on in the month being viewed, not the
    // anchor date it was first set up with — otherwise November still says
    // "23 Sept" and the list looks out of order when it isn't.
    const occs = i.date ? occurrencesInMonth(i, mStart, mEnd) : [];
    // Show what it actually is in THIS month. A month you've edited must not
    // keep showing the usual amount, or the row and the total disagree.
    const effAmounts = occs.map(d=>getEffectiveAmount(i, d));
    const sameEvery = effAmounts.every(v=>Math.abs(v-effAmounts[0]) < 0.005);
    const shownAmount = effAmounts.length && sameEvery ? effAmounts[0] : (Number(i.amount)||0);
    const amountText = effAmounts.length && !sameEvery
      ? effAmounts.map(v=>fmt(v)).join(' + ')
      : fmt(shownAmount);
    const edited = effAmounts.length && Math.abs(shownAmount - (Number(i.amount)||0)) > 0.005;
    const whenText = occs.length
      ? (occs.length === 1
          ? fmtDate(toDateStr(occs[0]))
          : occs.map(d=>fmtDate(toDateStr(d))).join('  and  '))
      : (i.date ? fmtDate(i.date) : '');
    const notThisMonth = !occs.length && !!i.date;
    const isEditing = editingItem.kind===listKey && editingItem.id===i.id;
    if(isEditing){
      return `
      <form class="miniform edit-item-form" data-kind="${listKey}" data-id="${i.id}" style="padding:9px 4px;border-bottom:1px solid var(--border);">
        <input type="text" name="name" value="${escapeHtml(i.name)}" required>
        <input type="number" name="amount" value="${i.amount}" step="0.01" min="0" required>
        <select name="frequency">
          <option value="monthly" ${i.frequency==='monthly'?'selected':''}>Every month</option>
          <option value="fourweekly" ${i.frequency==='fourweekly'?'selected':''}>Every 4 weeks</option>
          <option value="weekly" ${i.frequency==='weekly'?'selected':''}>Every week</option>
          <option value="oneoff" ${i.frequency==='oneoff'?'selected':''}>One-off</option>
        </select>
        <input type="date" name="date" value="${i.date||''}" title="Next/anchor payment date">
        <button type="submit" class="btn small">Save</button>
        <button type="button" class="btn small secondary cancel-edit-item">Cancel</button>
      </form>`;
    }
    const expandable = kind === 'income';
    const isExpanded = expandable && expandedIncomeId === i.id;
    if(listConfirmDelete && listConfirmDelete.kind === listKey && listConfirmDelete.id === i.id){
      const occCount = i.date && i.frequency !== 'oneoff' ? 'every date it appears on' : 'this one payment';
      return `
      <div class="confirm-box" style="margin:8px 0;">
        <div class="confirm-text">
          Delete <b>${escapeHtml(i.name)}</b> (${fmt(i.amount)} · ${freqLabel(i.frequency)})?<br>
          This removes ${occCount}, past and future.
          ${listKey === 'incomes' ? '<br>Anything coming out of it will be shared across your other payments instead.' : ''}
          <br><span style="color:var(--text-soft);">You can take it back with the ↩️ Undo button afterwards.</span>
        </div>
        <div class="row-btns">
          <button class="btn small list-del-yes" data-kind="${listKey}" data-id="${i.id}" style="flex:1;background:var(--bad);box-shadow:none;">Yes, delete it</button>
          <button class="btn small secondary list-del-no" style="flex:1;">Cancel</button>
        </div>
      </div>`;
    }
    const rowDone = occs.length && isPaidEntry(paidKeyFor(i, occs[0]), toDateStr(occs[0]));
    const rowHtml = `
      <div class="item-row${rowDone?' row-paid':''}">
        <div class="info info-click${expandable?'':' edit-name-tap'}" ${expandable?`data-expand-id="${i.id}"`:`data-kind="${listKey}" data-id="${i.id}"`}>
          <span class="name">${escapeHtml(i.name)}${expandable?` <span style="font-size:0.75rem;color:var(--pink-4);">${isExpanded?'▲':'▼ tap for details'}</span>`:''}</span>
          <span class="freq">${amountText} · ${freqLabel(i.frequency)}${edited ? ` <span class="pill" style="text-transform:none;letter-spacing:0;">changed for this month · usually ${fmt(i.amount)}</span>` : ''}</span>
          ${i.date
            ? `<span class="datepill">📅 ${whenText}${occs.length > 1 ? ` <span class="pill" style="text-transform:none;letter-spacing:0;">twice this month</span>` : ''}${notThisMonth ? ' · nothing in this month' : ''}</span>`
            : `<span class="datepill nodate">No date set yet</span>`}
          ${(()=>{
            if(listKey !== 'expenses' || !i.date) return '';
            // Which payment covers it on the date it lands in THIS month.
            const d = (when instanceof Date) ? when : (occs.length ? occs[0] : nextOccurrenceFromToday(i));
            if(!d) return '';
            const src = incomeNameById(allocateForDate(toDateStr(d))[i.id]);
            return src ? `<span class="datepill" style="color:var(--text-soft);">💌 from ${escapeHtml(src)}</span>` : '';
          })()}
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          ${occs.length ? tickHtml(paidKeyFor(i, occs[0]), toDateStr(occs[0])) : ''}
          <button class="del cal-jump" data-kind="${listKey}" data-id="${i.id}" title="Go to this date">📅</button>
          <button class="del edit-btn" data-kind="${listKey}" data-id="${i.id}" title="Edit">✏️</button>
          <button class="del" data-kind="${listKey}" data-id="${i.id}" title="Remove">✕</button>
        </div>
      </div>
      `;
    return rowHtml + (isExpanded ? renderIncomeExpansion(i) : '');
  };

  const emptyMsg = `<div class="empty">Nothing added yet — pop your first one in below 🌱</div>`;
  let listHtml;

  if(listKey === 'expenses'){
    // Outgoings are grouped by the payment they come out of, so you can see
    // at a glance what each benefit is covering.
    const order = {};
    state.incomes.forEach((inc,ix)=>{ order[inc.id] = ix; });
    const tagged = dated.map(d=>{
      const ds = d.when ? toDateStr(d.when) : '';
      const incId = ds ? (allocateForDate(ds)[d.item.id] || '') : '';
      return { item: d.item, when: d.when, incId, incName: incomeNameById(incId) };
    });
    tagged.sort((a,b)=>{
      const ao = a.incId && (a.incId in order) ? order[a.incId] : 999;
      const bo = b.incId && (b.incId in order) ? order[b.incId] : 999;
      if(ao !== bo) return ao - bo;
      if(!a.when && !b.when) return 0;
      if(!a.when) return 1;
      if(!b.when) return -1;
      return a.when - b.when;
    });
    // Holiday instalments come out of these payments too, so they belong in
    // the list, not only in the total.
    const tripRows = [];
    state.trips.forEach(t=>(t.payments||[]).forEach(pm=>{
      if(!pm.date) return;
      const d = new Date(pm.date+"T00:00:00");
      if(d < mStart || d > mEnd) return;
      tripRows.push({
        tripId: t.id, paymentId: pm.id, tripName: t.name,
        label: pm.label || 'Payment', amount: Number(pm.amount)||0,
        when: d, dateStr: pm.date,
        incId: allocateForDate(pm.date)['trip-'+pm.id] || ''
      });
    }));

    // One block per payment. A payment with nothing coming out of it still gets
    // a block, so every payment shows what's left of it.
    const groupKeys = [];
    state.incomes.forEach(inc=>{
      const hasItems = tagged.some(x=>x.incId === inc.id) || tripRows.some(tr=>tr.incId === inc.id);
      const landsThisMonth = occurrencesInMonth(inc, mStart, mEnd).some(d=>!isSkipped(inc.id, d));
      if(hasItems || landsThisMonth) groupKeys.push(inc.id);
    });
    // Put the payments in the order they land, so the page reads like the
    // month does: earliest at the top.
    const firstLanding = id=>{
      const inc = state.incomes.find(v=>v.id===id);
      const ds = inc ? occurrencesInMonth(inc, mStart, mEnd).filter(d=>!isSkipped(inc.id, d)) : [];
      return ds.length ? ds[0].getTime() : Infinity;
    };
    const incOrder = {};
    state.incomes.forEach((inc,ix)=>{ incOrder[inc.id] = ix; });
    groupKeys.sort((a,b)=> (firstLanding(a) - firstLanding(b)) || (incOrder[a] - incOrder[b]));
    if(tagged.some(x=>!x.incId) || tripRows.some(tr=>!tr.incId)) groupKeys.push('none');

    const tripRowHtml = (tr)=>{
      const key = 'trip-' + tr.paymentId;
      const done = isPaidEntry(key, tr.dateStr);
      return `
      <div class="item-row${done?' row-paid':''}">
        <div class="info">
          <span class="name">${escapeHtml(tr.label)}</span>
          <span class="freq">${fmt(tr.amount)} · just once</span>
          <span class="datepill">📅 ${fmtDate(tr.dateStr)}</span>
          <span class="datepill" style="color:var(--text-soft);">🧳 ${escapeHtml(tr.tripName)} — on your Trips tab</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          ${tickHtml(key, tr.dateStr)}
          <button class="del trip-row-jump" data-trip="${tr.tripId}" title="Open this trip">✏️</button>
        </div>
      </div>`;
    };

    const groupHtml = (key)=>{
      const incId = key === 'none' ? '' : key;
      const incName = incomeNameById(incId);
      const mine = tagged.filter(x=>(x.incId||'none') === key);
      // Use what each one actually is on its own date, not its usual amount,
      // so an edited month adds up the way the Calendar does.
      const sub = mine.reduce((s,x)=> s + (x.when ? getEffectiveAmount(x.item, x.when) : (Number(x.item.amount)||0)), 0);
      const inc = incId ? state.incomes.find(v=>v.id===incId) : null;
      // Holiday instalments come out of these payments too, so they have to
      // count towards what's left - they're just managed on the Trips tab.
      const mineTrips = tripRows.filter(tr=> (tr.incId||'none') === key);
      const tripOut = mineTrips.reduce((t,tr)=>t+tr.amount, 0);
      // What this payment brings in across the whole month (a 4-weekly one can
      // land twice), so "left" lines up with the month you're viewing.
      const incDates = inc ? occurrencesInMonth(inc, mStart, mEnd).filter(d=>!isSkipped(inc.id, d)) : [];
      const comesIn = incDates.reduce((s2,d)=>s2+getEffectiveAmount(inc, d), 0);
      const shortDate = d => d.toLocaleDateString('en-GB', {day:'numeric', month:'short'});
      const whenLine = incDates.length ? incDates.map(shortDate).join('  and  ') : '';
      // When a payment lands more than once, show the sum rather than a total
      // that looks like a single payment.
      const inSums = incDates.map(d=>getEffectiveAmount(inc, d));
      const allSame = inSums.every(v=>Math.abs(v-inSums[0])<0.005);
      const inText = incDates.length > 1
        ? (allSame ? `${fmt(inSums[0])} × ${incDates.length} = ${fmt(comesIn)} in`
                   : `${inSums.map(v=>fmt(v)).join(' + ')} = ${fmt(comesIn)} in`)
        : `${fmt(comesIn)} in`;
      const goesOut = sub + tripOut;
      const leftOver = comesIn - goesOut;
      const groupTicked =
        mine.reduce((t,x)=>{
          if(!x.when) return t;
          const k = x.item.id + '@' + toDateStr(x.when);
          return isPaidEntry(k, toDateStr(x.when)) ? t + getEffectiveAmount(x.item, x.when) : t;
        }, 0)
        + mineTrips.reduce((t,tr)=> isPaidEntry('trip-'+tr.paymentId, tr.dateStr) ? t + tr.amount : t, 0);
      // Use the date it lands in the month you're LOOKING at — not the next
      // one from today, or adding in November quietly files it in October.
      const nd = inc ? (incDates.length ? incDates[0] : nextOccurrenceFromToday(inc)) : null;
      const ndStr = (nd && !isNaN(nd.getTime())) ? toDateStr(nd) : '';
      const adder = !inc ? '' : (listAddingTo === incId ? `
        <form class="addform group-add-form" data-inc="${incId}" style="margin:6px 0 14px;padding:12px;border:1.5px dashed var(--pink-3);border-radius:14px;">
          <div>
            <label>What's it called?</label>
            <input type="text" name="name" placeholder="e.g. Haircut" required>
          </div>
          <div>
            <label>Amount (&pound;)</label>
            <input type="number" name="amount" step="0.01" min="0" required>
          </div>
          <div>
            <label>How often?</label>
            <select name="frequency">
              <option value="oneoff">Just this once</option>
              <option value="monthly">Every month</option>
              <option value="fourweekly">Every 4 weeks</option>
              <option value="weekly">Every week</option>
            </select>
          </div>
          <div>
            <label>Which ${escapeHtml(incName)} payment?</label>
            ${incDates.length > 1 ? `
            <select name="date" required>
              ${incDates.map(d=>`<option value="${toDateStr(d)}">${fmtDate(toDateStr(d))}</option>`).join('')}
            </select>` : `
            <input type="date" name="date" value="${ndStr}" required>`}
          </div>
          <div class="row-btns">
            <button type="submit" class="btn" style="flex:1;">Add to ${escapeHtml(incName)} 🩷</button>
            <button type="button" class="btn secondary cancel-group-add" style="flex:1;">Cancel</button>
          </div>
        </form>` : `
        <button class="btn small secondary group-add-btn" data-inc="${incId}" style="width:100%;margin:4px 0 12px;">➕ Add an outgoing to ${escapeHtml(incName)}</button>`);
      // Folded away by default so the page is a short list of payments. Stays
      // unfolded if something inside it is being edited or added to.
      const editingInHere = editingItem.kind === 'expenses' && mine.some(x=>x.item.id === editingItem.id);
      const isOpen = !!outgoingGroupOpen[key] || listAddingTo === incId || editingInHere;
      const header = `
        <div class="cal-month group-head" data-group="${key}" style="display:flex;align-items:center;gap:6px;cursor:pointer;">
          <span style="color:var(--pink-4);">${isOpen?'▲':'▼'}</span>
          ${incName ? '💌 '+escapeHtml(incName) : '📭 Nothing comes in on these dates'}
          <span class="pill" style="margin-left:auto;text-transform:none;letter-spacing:0;">${mine.length + mineTrips.length} going out · ${fmt(goesOut)}</span>
        </div>
        ${whenLine ? `<div class="group-when">📅 ${whenLine}${incDates.length>1?` <span class="pill" style="text-transform:none;letter-spacing:0;">lands ${incDates.length === 2 ? 'twice' : incDates.length+' times'} this month</span>`:''}</div>` : ''}
        ${!inc && isOpen ? `<div class="disclaimer" style="margin:-2px 0 10px;">
          These go out on dates when no money comes in, so they aren't taken off any payment.
          Usually that means a payment is missing — add it on the Income tab with the right date and these will move under it on their own.
        </div>` : ''}
        ${inc ? `
        <div class="group-left">
          <div class="group-left-sums">
            <span>${inText}</span>
            <span>−</span>
            <span>${fmt(goesOut)} out${tripOut>0.001?` <i>(incl. ${fmt(tripOut)} holiday)</i>`:''}</span>
          </div>
          <div class="group-left-total">
            <span>${leftOver < -0.001 ? 'Over by, across all of '+monthLabel.split(' ')[0] : 'Left from '+escapeHtml(incName)+' across '+monthLabel.split(' ')[0]}</span>
            <b style="color:${leftOver < -0.001 ?'var(--bad)':'var(--good)'};">${fmt(Math.abs(leftOver))}</b>
          </div>
          ${(mine.length + mineTrips.length) ? `<div class="tick-progress">
            <span>✓ ${fmt(groupTicked)} has gone out</span>
            <span><b>${fmt(goesOut - groupTicked)}</b> still to go</span>
          </div>` : ''}
        </div>` : ''}
        ${isOpen ? adder : ''}`;
      if(!isOpen) return header;
      const merged = mine.map(x=>({ when: x.when, html: ()=>itemHtml(x.item, x.when) }))
        .concat(mineTrips.map(tr=>({ when: tr.when, html: ()=>tripRowHtml(tr) })));
      merged.sort((a,b)=>{
        if(!a.when && !b.when) return 0;
        if(!a.when) return 1;
        if(!b.when) return -1;
        return a.when - b.when;
      });
      const body = merged.length
        ? merged.map(m=>m.html()).join('')
        : `<div class="empty" style="padding:8px 0;font-size:0.85rem;">Nothing comes out of this payment in ${monthLabel}</div>`;
      return header + body;
    };

    listHtml = groupKeys.length
      ? groupKeys.map(groupHtml).join('')
      : `<div class="empty">Nothing lands in ${monthLabel} 🌱</div>`;

  } else {
    let seenUndated = false;
    listHtml = dated.length ? dated.map(({item:i, when})=>{
      let header = '';
      if(!when && !seenUndated){
        seenUndated = true;
        header = `<div class="cal-month">📭 No date set yet</div>`;
      }
      return header + itemHtml(i, when);
    }).join('') : `<div class="empty">Nothing lands in ${monthLabel} 🌱</div>`;
  }

  el.innerHTML = `
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:8px;">
        <button class="btn small secondary list-prev">← Prev</button>
        <h2 style="margin:0;">${icon} ${monthLabel}${isThisMonth?' <span class="pill">now</span>':''}</h2>
        <button class="btn small secondary list-next">Next →</button>
      </div>
      <p style="font-size:0.8rem;color:var(--text-soft);text-align:center;margin:-2px 0 10px;">${title} in ${monthLabel}</p>
      ${!isThisMonth ? `<div style="text-align:center;margin:-2px 0 10px;"><button class="btn small secondary list-today">↩ Back to this month</button></div>`:''}
      ${listAdding[kind] ? `
      <form class="addform" data-kind="${listKey}" style="margin-bottom:16px;padding-bottom:14px;border-bottom:1.5px dashed var(--border);">
        <div>
          <label>What's it called?</label>
          <input type="text" name="name" placeholder="${kind==='income'?'e.g. Universal Credit':'e.g. Rent'}" required>
        </div>
        <div>
          <label>Amount (£)</label>
          <input type="number" name="amount" step="0.01" min="0" required>
        </div>
        <div>
          <label>How often?</label>
          <select name="frequency">
            <option value="monthly">Every month</option>
            <option value="fourweekly">Every 4 weeks</option>
            <option value="weekly">Every week</option>
            <option value="oneoff">One-off (this month only)</option>
          </select>
        </div>
        <div>
          <label>Next payment date (optional — powers your Calendar tab)</label>
          <input type="date" name="date">
        </div>
        <div class="row-btns">
          <button type="submit" class="btn" style="flex:1;">Add 🩷</button>
          <button type="button" class="btn secondary cancel-add-item" style="flex:1;">Cancel</button>
        </div>
      </form>` : `
      <button class="btn add-item-btn" style="width:100%;margin-bottom:14px;">➕ Add ${kind === 'income' ? 'income' : 'an outgoing'}</button>`}
      <div id="${kind}-list">
        ${listHtml}
      </div>
      <div class="stat full" style="margin-top:12px;">
        <div class="label">${kind === 'income' ? 'Coming in' : 'Going out'} in ${monthLabel}</div>
        <div class="value">${fmt(monthTotal)}</div>
        ${tripThisMonth > 0.001 ? `<div style="font-size:0.68rem;color:var(--text-soft);margin-top:5px;line-height:1.35;">
          Plus ${fmt(tripThisMonth)} of trip payments this month — those live on your Trips tab.
        </div>` : ''}
      </div>
    </div>
  `;

  el.querySelectorAll('.cal-jump').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const k = btn.dataset.kind, id = btn.dataset.id;
      const item = state[k].find(x=>x.id===id);
      if(!item) return;
      if(!item.date){
        editingItem = { kind: k, id: id };
        renderList(kind);
        return;
      }
      const nd = nextOccurrenceFromToday(item);
      if(nd){
        calViewMonth = new Date(nd.getFullYear(), nd.getMonth(), 1);
        document.querySelector('nav.tabs button[data-tab="calendar"]').click();
      }
    });
  });

  el.querySelectorAll('.del:not(.edit-btn):not(.cal-jump):not(.paid-tick):not(.trip-row-jump)').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const k = btn.dataset.kind, id = btn.dataset.id;
      // Only a real delete button carries both of these.
      if(!k || !id || !Array.isArray(state[k])) return;
      // Ask first — one stray tap used to wipe a whole payment and its history.
      listConfirmDelete = { kind: k, id: id };
      renderList(kind);
    });
  });
  el.querySelectorAll('.list-del-no').forEach(b=>{
    b.addEventListener('click', ()=>{ listConfirmDelete = null; renderList(kind); });
  });
  el.querySelectorAll('.list-del-yes').forEach(b=>{
    b.addEventListener('click', async ()=>{
      const k = b.dataset.kind, id = b.dataset.id;
      listConfirmDelete = null;
      if(!k || !id || !Array.isArray(state[k])) return;
      state[k] = state[k].filter(x=>x.id!==id);
      await persist();
    });
  });

  el.querySelectorAll('.edit-btn, .edit-name-tap').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(!btn.dataset.kind || !btn.dataset.id) return;
      editingItem = { kind: btn.dataset.kind, id: btn.dataset.id };
      renderList(kind);
    });
  });

  el.querySelectorAll('.cancel-edit-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      editingItem = { kind: null, id: null };
      renderList(kind);
    });
  });

  el.querySelectorAll('.edit-item-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const k = form.dataset.kind, id = form.dataset.id;
      const fd = new FormData(form);
      const amount = parseFloat(fd.get('amount'));
      const name = fd.get('name').trim();
      if(!name || isNaN(amount)) return;
      const item = state[k].find(x=>x.id===id);
      if(item){
        item.name = name;
        item.amount = amount;
        item.frequency = fd.get('frequency');
        item.date = fd.get('date') || '';
      }
      editingItem = { kind: null, id: null };
      await persist();
    });
  });

  const stepMonth = (delta)=>{
    calViewMonth = new Date(calViewMonth.getFullYear(), calViewMonth.getMonth()+delta, 1);
    listAdding.income = false; listAdding.outgoings = false; listAddingTo = null;
    editingMonthEntry = null; overviewAdding = false;
    renderAll();
  };
  const prevBtn = el.querySelector('.list-prev');
  if(prevBtn) prevBtn.addEventListener('click', ()=>stepMonth(-1));
  const nextBtn = el.querySelector('.list-next');
  if(nextBtn) nextBtn.addEventListener('click', ()=>stepMonth(1));
  const todayBtn2 = el.querySelector('.list-today');
  if(todayBtn2) todayBtn2.addEventListener('click', ()=>{
    const n = new Date();
    calViewMonth = new Date(n.getFullYear(), n.getMonth(), 1);
    listAdding.income = false; listAdding.outgoings = false; listAddingTo = null;
    renderAll();
  });

  wirePaidTicks(el);
  el.querySelectorAll('.trip-row-jump').forEach(b=>{
    b.addEventListener('click', ()=>{
      openTripId = b.dataset.trip;
      document.querySelector('nav.tabs button[data-tab="trips"]').click();
    });
  });

  el.querySelectorAll('.group-head').forEach(h=>{
    h.addEventListener('click', ()=>{
      const k = h.dataset.group;
      outgoingGroupOpen[k] = !outgoingGroupOpen[k];
      if(!outgoingGroupOpen[k] && listAddingTo && k === listAddingTo) listAddingTo = null;
      renderList(kind);
    });
  });

  el.querySelectorAll('.group-add-btn').forEach(b=>{
    b.addEventListener('click', ()=>{ listAddingTo = b.dataset.inc; outgoingGroupOpen[b.dataset.inc] = true; renderList(kind); });
  });
  el.querySelectorAll('.cancel-group-add').forEach(b=>{
    b.addEventListener('click', ()=>{ listAddingTo = null; renderList(kind); });
  });
  el.querySelectorAll('.group-add-form').forEach(gf=>{
    gf.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const fd = new FormData(gf);
      const name = (fd.get('name')||'').trim();
      const amount = parseFloat(fd.get('amount'));
      const date = fd.get('date');
      if(!name || isNaN(amount) || !date) return;
      state.expenses.push({
        id: uid(), name, amount,
        frequency: fd.get('frequency') || 'oneoff',
        date,
        fromIncome: gf.dataset.inc      // stays on this payment
      });
      listAddingTo = null;
      await persist();
    });
  });

  el.querySelectorAll('.add-item-btn').forEach(b=>{
    b.addEventListener('click', ()=>{ listAdding[kind] = true; renderList(kind); });
  });
  el.querySelectorAll('.cancel-add-item').forEach(b=>{
    b.addEventListener('click', ()=>{ listAdding[kind] = false; renderList(kind); });
  });

  // Must exclude the per-payment form, which shares the .addform styling but
  // has its own handler — otherwise one submit would add the item twice.
  const form = el.querySelector('form.addform:not(.group-add-form)');
  if(form) form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const item = { id: uid(), name: fd.get('name').trim(), amount: parseFloat(fd.get('amount')), frequency: fd.get('frequency'), date: fd.get('date')||'' };
    if(!item.name || isNaN(item.amount)) return;
    state[listKey].push(item);
    form.reset();
    listAdding[kind] = false;
    await persist();
  });

  if(kind === 'income'){
    el.querySelectorAll('.info-click').forEach(div=>{
      div.addEventListener('click', ()=>{
        const id = div.dataset.expandId;
        expandedIncomeId = (expandedIncomeId === id) ? null : id;
        incomeAdding = false;
        renderList('income');
      });
    });
    el.querySelectorAll('.inc-prev').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const item = state.incomes.find(x=>x.id===btn.dataset.income);
        if(!item) return;
        const cur = incomeViewDate[item.id] ? new Date(incomeViewDate[item.id]+"T00:00:00") : (nextOccurrenceFromToday(item)||new Date());
        incomeViewDate[item.id] = toDateStr(subtractInterval(cur, item.frequency));
        renderList('income');
      });
    });
    el.querySelectorAll('.inc-next').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const item = state.incomes.find(x=>x.id===btn.dataset.income);
        if(!item) return;
        const cur = incomeViewDate[item.id] ? new Date(incomeViewDate[item.id]+"T00:00:00") : (nextOccurrenceFromToday(item)||new Date());
        incomeViewDate[item.id] = toDateStr(addInterval(cur, item.frequency));
        renderList('income');
      });
    });
    el.querySelectorAll('.tied-del-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{ tiedConfirmDelete = btn.dataset.key; renderList('income'); });
    });
    el.querySelectorAll('.tied-del-no').forEach(btn=>{
      btn.addEventListener('click', ()=>{ tiedConfirmDelete = null; renderList('income'); });
    });
    el.querySelectorAll('.tied-skip-yes').forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        tiedConfirmDelete = null;
        const key = overrideKey(btn.dataset.item, new Date(btn.dataset.date+"T00:00:00"));
        state.skips = state.skips || {};
        state.skips[key] = true;
        await persist();
      });
    });
    el.querySelectorAll('.tied-del-all-yes').forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        tiedConfirmDelete = null;
        state.expenses = state.expenses.filter(x=>x.id!==btn.dataset.item);
        await persist();
      });
    });
    el.querySelectorAll('.tied-del-trip-yes').forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        tiedConfirmDelete = null;
        const trip = state.trips.find(x=>x.id===btn.dataset.trip);
        if(trip) trip.payments = (trip.payments||[]).filter(p=>p.id!==btn.dataset.payment);
        await persist();
      });
    });
    el.querySelectorAll('.inc-add-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{ incomeAdding = true; renderList('income'); });
    });
    el.querySelectorAll('.inc-cancel-add').forEach(btn=>{
      btn.addEventListener('click', ()=>{ incomeAdding = false; renderList('income'); });
    });
    el.querySelectorAll('.inc-add-form').forEach(addForm=>{
      addForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const date = addForm.dataset.date;
        const fd2 = new FormData(addForm);
        const name = fd2.get('name').trim();
        const amount = parseFloat(fd2.get('amount'));
        if(!name || isNaN(amount)) return;
        state.expenses.push({ id: uid(), name, amount, frequency: fd2.get('frequency') || 'oneoff', date, fromIncome: addForm.dataset.income || '' });
        incomeAdding = false;
        await persist();
      });
    });

    el.querySelectorAll('.payment-tap').forEach(div=>{
      div.addEventListener('click', ()=>{
        editingIncomePaymentFor = div.dataset.income;
        renderList('income');
      });
    });
    el.querySelectorAll('.cancel-edit-payment').forEach(btn=>{
      btn.addEventListener('click', ()=>{ editingIncomePaymentFor = null; renderList('income'); });
    });
    el.querySelectorAll('.edit-payment-amount-form').forEach(payForm=>{
      payForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const item = state.incomes.find(x=>x.id===payForm.dataset.income);
        if(!item) return;
        const viewDateStr2 = incomeViewDate[item.id] || (nextOccurrenceFromToday(item)?toDateStr(nextOccurrenceFromToday(item)):item.date);
        const viewDate2 = new Date(viewDateStr2+"T00:00:00");
        const fd3 = new FormData(payForm);
        const amount = parseFloat(fd3.get('amount'));
        if(isNaN(amount)) return;
        state.overrides = state.overrides || {};
        state.overrides[overrideKey(item.id, viewDate2)] = amount;
        editingIncomePaymentFor = null;
        await persist();
      });
    });
    el.querySelectorAll('.reset-payment-override').forEach(btn=>{
      btn.addEventListener('click', async ()=>{
        const item = state.incomes.find(x=>x.id===btn.dataset.income);
        if(!item) return;
        const viewDateStr2 = incomeViewDate[item.id] || (nextOccurrenceFromToday(item)?toDateStr(nextOccurrenceFromToday(item)):item.date);
        const viewDate2 = new Date(viewDateStr2+"T00:00:00");
        const key = overrideKey(item.id, viewDate2);
        if(state.overrides) delete state.overrides[key];
        await persist();
      });
    });

    el.querySelectorAll('.edit-tied-btn, .tied-name-tap').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        editingTiedItem = btn.dataset.key;
        renderList('income');
      });
    });
    el.querySelectorAll('.cancel-edit-tied').forEach(btn=>{
      btn.addEventListener('click', ()=>{ editingTiedItem = null; renderList('income'); });
    });
    el.querySelectorAll('.edit-tied-override-form').forEach(tform=>{
      tform.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const x = state.expenses.find(v=>v.id===tform.dataset.item);
        if(!x) return;
        // figure out which income/date this expansion belongs to by finding the expanded income
        const incomeItem = state.incomes.find(v=>v.id===expandedIncomeId);
        if(!incomeItem) return;
        const viewDateStr2 = incomeViewDate[incomeItem.id] || (nextOccurrenceFromToday(incomeItem)?toDateStr(nextOccurrenceFromToday(incomeItem)):incomeItem.date);
        const viewDate2 = new Date(viewDateStr2+"T00:00:00");
        const fd4 = new FormData(tform);
        const amount = parseFloat(fd4.get('amount'));
        if(isNaN(amount)) return;
        const newName = (fd4.get('name')||'').trim();
        if(newName) x.name = newName;
        const newFreq = fd4.get('frequency');
        if(newFreq && newFreq !== x.frequency){
          x.frequency = newFreq;
          if(newFreq === 'oneoff'){
            // It only happens on the date you're looking at now.
            x.date = viewDateStr2;
            x.amount = amount;
            delete x.endDate;
            if(state.overrides) delete state.overrides[overrideKey(x.id, viewDate2)];
            editingTiedItem = null;
            await persist();
            return;
          }
        }
        state.overrides = state.overrides || {};
        state.overrides[overrideKey(x.id, viewDate2)] = amount;
        editingTiedItem = null;
        await persist();
      });
    });
    el.querySelectorAll('.edit-tied-oneoff-form').forEach(tform=>{
      tform.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const x = state.expenses.find(v=>v.id===tform.dataset.item);
        if(!x) return;
        const fd5 = new FormData(tform);
        const name = fd5.get('name').trim();
        const amount = parseFloat(fd5.get('amount'));
        if(!name || isNaN(amount)) return;
        x.name = name;
        x.amount = amount;
        const freq5 = fd5.get('frequency');
        if(freq5 && freq5 !== x.frequency){
          x.frequency = freq5;
          // It starts repeating from the date you're looking at.
          const incomeItem5 = state.incomes.find(v=>v.id===expandedIncomeId);
          if(incomeItem5){
            const nd5 = nextOccurrenceFromToday(incomeItem5);
            x.date = incomeViewDate[incomeItem5.id] || (nd5 ? toDateStr(nd5) : incomeItem5.date);
          }
          delete x.endDate;
        }
        editingTiedItem = null;
        await persist();
      });
    });
    el.querySelectorAll('.edit-tied-trip-form').forEach(tform=>{
      tform.addEventListener('submit', async (e)=>{
        e.preventDefault();
        const trip = state.trips.find(v=>v.id===tform.dataset.trip);
        if(!trip) return;
        const p = (trip.payments||[]).find(v=>v.id===tform.dataset.payment);
        if(!p) return;
        const fd6 = new FormData(tform);
        const amount = parseFloat(fd6.get('amount'));
        if(isNaN(amount)) return;
        p.label = (fd6.get('label')||'').trim() || 'Payment';
        p.amount = amount;
        editingTiedItem = null;
        await persist();
      });
    });
  }
}

function renderGoals(){
  const el = document.getElementById('tab-goals');
  const goals = state.goals;
  el.innerHTML = `
    <div class="card">
      <h2>🎯 Savings goals</h2>
      <div id="goals-list">
        ${goals.length ? goals.map(g=>{
          const pct = g.target>0 ? Math.min(100, Math.round((g.saved/g.target)*100)) : 0;
          if(editingGoalId === g.id){
            return `
            <form class="goal-card edit-goal-form" data-id="${g.id}">
              <div class="miniform" style="margin-top:0;">
                <input type="text" name="name" value="${escapeHtml(g.name)}" required>
                <input type="number" name="target" value="${g.target}" step="0.01" min="0" placeholder="Target £" required>
                <input type="number" name="saved" value="${g.saved}" step="0.01" min="0" placeholder="Saved £">
              </div>
              <div class="row-btns" style="margin-top:10px;">
                <button type="submit" class="btn small">Save</button>
                <button type="button" class="btn small secondary cancel-edit-goal">Cancel</button>
              </div>
            </form>`;
          }
          return `
          <div class="goal-card">
            <div class="goal-top">
              <span class="gname">${escapeHtml(g.name)}</span>
              <span class="gamt">${fmt(g.saved)} / ${fmt(g.target)}</span>
            </div>
            <div class="bar-bg"><div class="bar-fill" style="width:${pct}%"></div></div>
            <div class="row-btns" style="margin-top:10px;">
              <input type="number" class="add-contrib" data-id="${g.id}" placeholder="£ add" step="0.01" style="flex:1;padding:8px 10px;border-radius:10px;border:1.5px solid var(--border);background:var(--pink-1);color:var(--text);">
              <button class="btn small contrib-btn" data-id="${g.id}">Add 🌸</button>
              <button class="btn small secondary edit-goal-btn" data-id="${g.id}">Edit</button>
              <button class="btn small secondary del-goal" data-id="${g.id}">Remove</button>
            </div>
          </div>`;
        }).join('') : `<div class="empty">No goals yet — what are you dreaming of saving for? 🌈</div>`}
      </div>
    </div>
    <div class="card">
      <h2>➕ New goal</h2>
      <form class="addform" id="goalForm">
        <div>
          <label>What's it for?</label>
          <input type="text" name="name" placeholder="e.g. Haven holiday" required>
        </div>
        <div>
          <label>Target amount (£)</label>
          <input type="number" name="target" step="0.01" min="0" required>
        </div>
        <div>
          <label>Already saved (£, optional)</label>
          <input type="number" name="saved" step="0.01" min="0" value="0">
        </div>
        <button type="submit" class="btn">Create goal 🎯</button>
      </form>
    </div>
    <div class="card">
      <h2>🏦 Where's best to save?</h2>
      <div class="tip">
        <strong>Easy-access savings account</strong> — for money you might need at short notice (like your Haven or Butlins spending money). No penalty for taking it out.<br><br>
        <strong>Cash ISA</strong> — like an easy-access account but the interest is tax-free. Worth it once savings grow, though most people on lower incomes won't pay tax on interest anyway.<br><br>
        <strong>Fixed-rate bond</strong> — usually pays a bit more interest, but your money is locked away for a set time (e.g. 6-12 months). Only for money you're sure you won't need.<br><br>
        <strong>Help to Save</strong> — a UK government scheme for people receiving Universal Credit or Working Tax Credit. You can save £1–£50 a month and the government adds a 50% bonus on top after 2 and 4 years. Worth checking on GOV.UK if you're eligible — it's one of the better options for benefit-linked savers.
        <div class="disclaimer">This is general information, not personalised financial advice — account rates and eligibility change, so it's worth checking current rates yourself before choosing.</div>
      </div>
    </div>
  `;

  const gform = el.querySelector('#goalForm');
  gform.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(gform);
    const g = { id: uid(), name: fd.get('name').trim(), target: parseFloat(fd.get('target')), saved: parseFloat(fd.get('saved'))||0 };
    if(!g.name || isNaN(g.target)) return;
    state.goals.push(g);
    gform.reset();
    await persist();
  });

  el.querySelectorAll('.contrib-btn').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const id = btn.dataset.id;
      const input = el.querySelector(`.add-contrib[data-id="${id}"]`);
      const val = parseFloat(input.value);
      if(isNaN(val)) return;
      const g = state.goals.find(x=>x.id===id);
      if(g){ g.saved = (Number(g.saved)||0) + val; }
      await persist();
    });
  });
  el.querySelectorAll('.del-goal').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      state.goals = state.goals.filter(x=>x.id!==btn.dataset.id);
      await persist();
    });
  });

  el.querySelectorAll('.edit-goal-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      editingGoalId = btn.dataset.id;
      renderGoals();
    });
  });
  el.querySelectorAll('.cancel-edit-goal').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      editingGoalId = null;
      renderGoals();
    });
  });
  el.querySelectorAll('.edit-goal-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const id = form.dataset.id;
      const fd = new FormData(form);
      const name = fd.get('name').trim();
      const target = parseFloat(fd.get('target'));
      const saved = parseFloat(fd.get('saved'))||0;
      if(!name || isNaN(target)) return;
      const g = state.goals.find(x=>x.id===id);
      if(g){ g.name = name; g.target = target; g.saved = saved; }
      editingGoalId = null;
      await persist();
    });
  });
}

/* ---------- Trips ---------- */
function fmtDate(d){
  if(!d) return '';
  try{
    const dt = new Date(d+"T00:00:00");
    return dt.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
  }catch(e){ return d; }
}
function tripTotals(t){
  const payments = t.payments||[];
  const todayStr = toDateStr(new Date());
  // A payment counts as paid once it's ticked. Until then it falls back to
  // whether its date has gone by — so ticking moves "Left to pay" here too.
  const isPaidDate = (p)=> isPaidEntry('trip-'+p.id, p.date);
  const paidAccommodationFromPayments = payments.filter(p=>p.category==='accommodation' && isPaidDate(p)).reduce((s,p)=>s+(Number(p.amount)||0),0);
  const paidSpendingFromPayments = payments.filter(p=>p.category==='spending' && isPaidDate(p)).reduce((s,p)=>s+(Number(p.amount)||0),0);
  const paidOther = payments.filter(p=>(!p.category || p.category==='other') && isPaidDate(p)).reduce((s,p)=>s+(Number(p.amount)||0),0);
  const scheduledAccommodationFromPayments = payments.filter(p=>p.category==='accommodation' && !isPaidDate(p)).reduce((s,p)=>s+(Number(p.amount)||0),0);
  const scheduledSpendingFromPayments = payments.filter(p=>p.category==='spending' && !isPaidDate(p)).reduce((s,p)=>s+(Number(p.amount)||0),0);
  const accommodationPaidExtra = Number(t.accommodationPaidExtra)||0;
  const spendingPaidExtra = Number(t.spendingPaidExtra)||0;
  const itineraryPaid = (t.itinerary||[]).filter(i=>i.paid).reduce((s,i)=>s+(Number(i.cost)||0),0);
  const paidAccommodation = paidAccommodationFromPayments + accommodationPaidExtra + itineraryPaid;
  const paidSpending = paidSpendingFromPayments + spendingPaidExtra;
  const paid = paidAccommodation + paidSpending + paidOther;
  const itineraryCost = (t.itinerary||[]).reduce((s,i)=>s+ (Number(i.cost)||0), 0);
  const accommodationBudget = Number(t.accommodationBudget)||0;
  const spendingBudget = Number(t.spendingBudget)||0;
  const budget = accommodationBudget + spendingBudget;
  const remaining = budget - paid;
  return { paid, paidAccommodation, paidSpending, paidOther, paidAccommodationFromPayments, paidSpendingFromPayments, scheduledAccommodationFromPayments, scheduledSpendingFromPayments, itineraryCost, itineraryPaid, accommodationBudget, spendingBudget, budget, remaining };
}

// Where a trip sits relative to today.
function tripTiming(t){
  if(!t.startDate) return { kind:'nodate' };
  const today = new Date(); today.setHours(0,0,0,0);
  const start = new Date(t.startDate + "T00:00:00");
  const end = t.endDate ? new Date(t.endDate + "T00:00:00") : start;
  if(isNaN(start.getTime())) return { kind:'nodate' };
  const day = 86400000;
  const nights = Math.max(0, Math.round((end - start) / day));
  if(today < start){
    return { kind:'ahead', days: Math.round((start - today) / day), nights, start, end };
  }
  if(today <= end){
    return { kind:'now', dayNo: Math.round((today - start) / day) + 1, totalDays: nights + 1,
             leftDays: Math.round((end - today) / day), start, end };
  }
  return { kind:'past', start, end };
}

function tripTimingPill(t){
  const tt = tripTiming(t);
  if(tt.kind === 'nodate') return `<span class="trip-when trip-when-none">📅 No dates set yet</span>`;
  if(tt.kind === 'now')    return `<span class="trip-when trip-when-now">🌴 On now · day ${tt.dayNo} of ${tt.totalDays}</span>`;
  if(tt.kind === 'past')   return `<span class="trip-when trip-when-past">✓ Been</span>`;
  const big = tt.days === 0 ? 'Today!' : tt.days === 1 ? 'Tomorrow!' : `${tt.days} days to go`;
  return `<span class="trip-when">⏳ ${big}${tt.nights ? ` · ${tt.nights} night${tt.nights===1?'':'s'}` : ''}</span>`;
}

// The big countdown at the top of the Trips tab.
function nextTripHtml(){
  const timed = state.trips.map(t=>({ t, tt: tripTiming(t) }));
  const onNow = timed.find(x=>x.tt.kind === 'now');
  const ahead = timed.filter(x=>x.tt.kind === 'ahead').sort((a,b)=> a.tt.days - b.tt.days);
  const shortD = d => d.toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short'});
  const longD  = d => d.toLocaleDateString('en-GB', {weekday:'long', day:'numeric', month:'long', year:'numeric'});
  let top = '', after = null;
  if(onNow){
    const tt = onNow.tt;
    top = `
      <div class="np-count"><span class="np-big">🌴</span>
        <span class="np-words">You're on holiday!</span></div>
      <div class="np-trip">${escapeHtml(onNow.t.name)}</div>
      <div class="np-date">Day ${tt.dayNo} of ${tt.totalDays} · ${tt.leftDays === 0 ? 'last day today' : tt.leftDays+' day'+(tt.leftDays===1?'':'s')+' left'}</div>`;
    after = ahead[0] || null;
  } else if(ahead.length){
    const n = ahead[0], tt = n.tt;
    const big = tt.days === 0 ? 'Today' : String(tt.days);
    const words = tt.days === 0 ? 'is holiday day! 🎉' : tt.days === 1 ? 'day until your next holiday' : 'days until your next holiday';
    top = `
      <div class="np-count"><span class="np-big">${big}</span><span class="np-words">${words}</span></div>
      <div class="np-trip">${escapeHtml(n.t.name)}</div>
      <div class="np-date">📅 ${longD(tt.start)}${tt.nights ? ` · ${tt.nights} night${tt.nights===1?'':'s'}` : ''}</div>`;
    after = ahead[1] || null;
  } else {
    return '';
  }
  const afterHtml = after
    ? `<div class="np-after">After that: <b>${escapeHtml(after.t.name)}</b> on ${shortD(after.tt.start)} · ${after.tt.days} day${after.tt.days===1?'':'s'} away</div>`
    : '';
  return `<div class="card np-card">${top}${afterHtml}</div>`;
}

function renderTrips(){
  const el = document.getElementById('tab-trips');
  const trips = state.trips;
  el.innerHTML = `
    ${nextTripHtml()}
    <div class="card">
      <h2>🧳 Trips &amp; holidays</h2>
      <p style="font-size:0.85rem;color:var(--text-soft);margin-top:-6px;">Plan the money and the days out together — payments here can flow straight into your outgoings.</p>
      <div id="trips-list">
        ${trips.length ? trips.map(t=>tripCardHtml(t)).join('') : `<div class="empty">No trips yet — where are you off to? 🌴</div>`}
      </div>
    </div>
    <div class="card">
      <h2>➕ New trip</h2>
      <form class="addform" id="tripForm">
        <div>
          <label>Trip name</label>
          <input type="text" name="name" placeholder="e.g. Butlins Skegness" required>
        </div>
        <div>
          <label>Destination (optional)</label>
          <input type="text" name="destination" placeholder="e.g. Skegness">
        </div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;">
            <label>Start date</label>
            <input type="date" name="startDate">
          </div>
          <div style="flex:1;">
            <label>End date</label>
            <input type="date" name="endDate">
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;">
            <label>Holiday cost budget (£)</label>
            <input type="number" name="accommodationBudget" step="0.01" min="0">
          </div>
          <div style="flex:1;">
            <label>Spending money budget (£)</label>
            <input type="number" name="spendingBudget" step="0.01" min="0">
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;">
            <label>Holiday cost due by</label>
            <input type="date" name="accommodationDueDate">
          </div>
          <div style="flex:1;">
            <label>Spending money due by</label>
            <input type="date" name="spendingDueDate">
          </div>
        </div>
        <button type="submit" class="btn">Create trip 🧳</button>
      </form>
    </div>
  `;
  wireTripEvents();
}

function tripCardHtml(t){
  const { paid, paidAccommodation, paidSpending, paidOther, paidAccommodationFromPayments, paidSpendingFromPayments, scheduledAccommodationFromPayments, scheduledSpendingFromPayments, itineraryCost, itineraryPaid, accommodationBudget, spendingBudget, budget, remaining } = tripTotals(t);
  const accPct = accommodationBudget>0 ? Math.min(100, Math.round((paidAccommodation/accommodationBudget)*100)) : 0;
  const spendPct = spendingBudget>0 ? Math.min(100, Math.round((paidSpending/spendingBudget)*100)) : 0;
  const paidStatHtml = (kind, paidFromPayments, paidTotal)=>{
    const isEditing = editingTripPaidFor && editingTripPaidFor.tripId===t.id && editingTripPaidFor.kind===kind;
    if(isEditing){
      return `
        <form class="miniform edit-trip-paid-form" data-trip="${t.id}" data-kind="${kind}" style="flex:1;min-width:100px;">
          <input type="number" name="paid" value="${paidTotal}" step="0.01" min="0" required style="flex:2;">
          <button type="submit" class="btn small">Save</button>
          <button type="button" class="btn small secondary cancel-edit-trip-paid">Cancel</button>
        </form>`;
    }
    const extra = paidTotal - paidFromPayments - (kind==='accommodation'?itineraryPaid:0);
    const bits = [];
    if(kind==='accommodation' && itineraryPaid>0.001) bits.push('incl. '+fmt(itineraryPaid)+' paid day trips');
    if(Math.abs(extra)>0.001) bits.push('incl. '+fmt(extra)+' you typed in');
    return `
      <div class="mini-stat trip-paid-tap" data-trip="${t.id}" data-kind="${kind}" style="cursor:pointer;">
        Paid<b>${fmt(paidTotal)}</b>
        <div style="font-size:0.62rem;color:var(--pink-4);margin-top:2px;">${bits.length?bits.join(' · ')+' · ':''}tap to set</div>
      </div>`;
  };
  const budgetStatHtml = (kind, budgetValue)=>{
    const isEditing = editingTripBudgetFor && editingTripBudgetFor.tripId===t.id && editingTripBudgetFor.kind===kind;
    if(isEditing){
      return `
        <form class="miniform edit-trip-budget-form" data-trip="${t.id}" data-kind="${kind}" style="flex:1;min-width:100px;">
          <input type="number" name="budget" value="${budgetValue}" step="0.01" min="0" required style="flex:2;">
          <button type="submit" class="btn small">Save</button>
          <button type="button" class="btn small secondary cancel-edit-trip-budget">Cancel</button>
        </form>`;
    }
    return `
      <div class="mini-stat trip-budget-tap" data-trip="${t.id}" data-kind="${kind}" style="cursor:pointer;">
        Budget<b>${fmt(budgetValue)}</b>
        <div style="font-size:0.62rem;color:var(--pink-4);margin-top:2px;">tap to set</div>
      </div>`;
  };
  const quickAddHtml = (kind)=>{
    const isAdding = tripQuickAddFor && tripQuickAddFor.tripId===t.id && tripQuickAddFor.kind===kind;
    if(isAdding){
      return `
        <form class="miniform trip-quickadd-form" data-trip="${t.id}" data-kind="${kind}" style="margin-top:6px;">
          <input type="text" name="label" placeholder="e.g. Taxi to hotel" required>
          <input type="date" name="date">
          <input type="number" name="amount" step="0.01" min="0" placeholder="£" required>
          <button type="submit" class="btn small">Add</button>
          <button type="button" class="btn small secondary cancel-trip-quickadd">Cancel</button>
        </form>`;
    }
    return `<button class="btn small secondary trip-quickadd-btn" data-trip="${t.id}" data-kind="${kind}" style="margin-top:6px;">➕ Add to ${kind==='accommodation'?'Holiday cost':'Spending money'}</button>`;
  };
  const todayStr = toDateStr(new Date());
  const upcomingHtml = (kind)=>{
    // Every payment stays listed — ticking one must never make it vanish.
    const list = (t.payments||[])
      .filter(p=>p.category===kind && p.date)
      .sort((a,b)=>a.date.localeCompare(b.date));
    if(!list.length) return '';
    const left = list.filter(p=>!isPaidEntry('trip-'+p.id, p.date));
    const key = t.id+'|'+kind+'|up';
    const open = !!tripPanels[key];
    const total = left.reduce((s,p)=>s+(Number(p.amount)||0),0);
    return `
      <button class="btn small secondary trip-panel-btn" data-key="${key}" style="margin-top:6px;width:100%;text-align:left;">
        ${open?'▲':'▼'} 📅 ${left.length} of ${list.length} still to pay · ${fmt(total)}
      </button>
      ${open ? `<div style="margin-top:4px;">${list.map(p=>{
        const src = sourceLabelFor('trip-'+p.id, p.date);
        const done = isPaidEntry('trip-'+p.id, p.date);
        return `
        <div class="mini-row${done?' row-paid':''}">
          <span>
            <span class="mname">${escapeHtml(p.label||'Payment')}</span>
            <span class="mdate">${fmtDate(p.date)}${src?' · from '+escapeHtml(src):' · no payment lands that day'}</span>
          </span>
          <span style="display:flex;align-items:center;gap:8px;">
            <span class="amt">${fmt(p.amount)}</span>
            <button class="paid-tick${done?' is-done':''}" data-key="trip-${p.id}" data-date="${p.date}" title="${done?'Paid — tap to untick':'Not paid yet — tap when it goes out'}">${done?'✓':'○'}</button>
            <button class="mdel edit-trip-entry-btn" data-trip="${t.id}" data-kind="payments" data-id="${p.id}" title="Edit">✏️</button>
            <button class="mdel" data-trip="${t.id}" data-payment="${p.id}" title="Delete this payment">✕</button>
          </span>
        </div>`;
      }).join('')}</div>` : ''}`;
  };
  const dayPlanHtml = ()=>{
    const list = (t.itinerary||[]).slice().sort((a,b)=>(a.date||'').localeCompare(b.date||''));
    const key = t.id+'|plan';
    const open = !!tripPanels[key];
    const total = list.reduce((s,i)=>s+(Number(i.cost)||0),0);
    const label = list.length
      ? `${list.length} day${list.length===1?'':'s'}${total>0?' · '+fmt(total):' · all free'}`
      : 'nothing planned yet — tap to add';
    return `
      <button class="btn small secondary trip-panel-btn" data-key="${key}" style="margin-top:10px;width:100%;text-align:left;">
        ${open?'▲':'▼'} 🗺️ Day plan · ${label}
      </button>
      ${open ? `<div style="margin-top:4px;">
                  ${(t.itinerary||[]).length ? t.itinerary.map(i=>{
            const isEditing = editingTripEntry.tripId===t.id && editingTripEntry.kind==='itinerary' && editingTripEntry.id===i.id;
            if(isEditing){
              return `
              <form class="miniform edit-trip-entry-form" data-trip="${t.id}" data-kind="itinerary" data-id="${i.id}">
                <input type="date" name="date" value="${i.date||''}">
                <input type="text" name="label" value="${escapeHtml(i.label)}" required>
                <input type="number" name="cost" value="${i.cost||0}" step="0.01" min="0" placeholder="£ cost">
                <button type="submit" class="btn small">Save</button>
                <button type="button" class="btn small secondary cancel-edit-trip-entry">Cancel</button>
              </form>`;
            }
            const isPaid = !!i.paid;
            return `
            <div class="mini-row"${isPaid?' style="opacity:0.7;"':''}>
              <span><span class="mname"${isPaid?' style="text-decoration:line-through;"':''}>${escapeHtml(i.label)}</span>${i.date?`<span class="mdate">${fmtDate(i.date)}</span>`:''}${isPaid?' <span class="mdate" style="color:var(--good);">✅ Paid</span>':''}</span>
              <span style="display:flex;align-items:center;gap:8px;"><span class="amt">${i.cost?fmt(i.cost):'Free'}</span>
                ${i.cost ? `<button class="mdel toggle-itinerary-paid" data-trip="${t.id}" data-id="${i.id}" title="${isPaid?'Mark as not paid':'Mark as paid'}" style="${isPaid?'background:var(--good);color:#fff;':''}">${isPaid?'✅':'💰'}</button>` : ''}
                <button class="mdel edit-trip-entry-btn" data-trip="${t.id}" data-kind="itinerary" data-id="${i.id}" title="Edit">✏️</button>
                <button class="mdel" data-trip="${t.id}" data-itinerary="${i.id}" title="Remove">✕</button>
              </span>
            </div>`;
          }).join('') : `<div class="empty" style="padding:8px 0;">No days planned yet</div>`}
          <form class="miniform itinerary-form" data-trip="${t.id}">
            <input type="date" name="date">
            <input type="text" name="label" placeholder="e.g. Zoo day trip" required>
            <input type="number" name="cost" step="0.01" min="0" placeholder="£ cost">
            <button type="submit" class="btn small">Add</button>
          </form>
      </div>` : ''}`;
  };
  const open = openTripId === t.id;
  const dateRange = (t.startDate||t.endDate) ? `${fmtDate(t.startDate)}${t.endDate?(' – '+fmtDate(t.endDate)):''}` : '';

  if(editingTripDetailsId === t.id){
    return `
    <div class="trip-card">
      <form class="addform edit-trip-details-form" data-trip="${t.id}">
        <div><label>Trip name</label><input type="text" name="name" value="${escapeHtml(t.name)}" required></div>
        <div><label>Destination</label><input type="text" name="destination" value="${escapeHtml(t.destination||'')}"></div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;"><label>Start date</label><input type="date" name="startDate" value="${t.startDate||''}"></div>
          <div style="flex:1;"><label>End date</label><input type="date" name="endDate" value="${t.endDate||''}"></div>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;"><label>Holiday cost budget (£)</label><input type="number" name="accommodationBudget" value="${t.accommodationBudget||0}" step="0.01" min="0"></div>
          <div style="flex:1;"><label>Spending money budget (£)</label><input type="number" name="spendingBudget" value="${t.spendingBudget||0}" step="0.01" min="0"></div>
        </div>
        <div style="display:flex;gap:8px;">
          <div style="flex:1;"><label>Holiday cost due by</label><input type="date" name="accommodationDueDate" value="${t.accommodationDueDate||''}"></div>
          <div style="flex:1;"><label>Spending money due by</label><input type="date" name="spendingDueDate" value="${t.spendingDueDate||''}"></div>
        </div>
        <div class="row-btns">
          <button type="submit" class="btn">Save</button>
          <button type="button" class="btn secondary cancel-edit-trip-details" data-trip="${t.id}">Cancel</button>
        </div>
      </form>
    </div>`;
  }

  return `
    <div class="trip-card">
      <div class="trip-top" data-toggle="${t.id}">
        <div>
          <div class="tname">${escapeHtml(t.name)}</div>
          ${t.destination ? `<div class="tdest">${escapeHtml(t.destination)}</div>`:''}
          ${dateRange ? `<div class="tdates">${dateRange}</div>`:''}
          <div style="margin-top:5px;">${tripTimingPill(t)}</div>
        </div>
        <span style="display:flex;align-items:center;gap:8px;">
          <button class="del edit-trip-details-btn" data-trip="${t.id}" title="Edit trip details">✏️</button>
          <span class="trip-toggle">${open?'▲':'▼'}</span>
        </span>
      </div>
      ${t.accommodationHidden ? `
      <div class="mini-row" style="margin-top:10px;">
        <span><span class="mname">🏖️ Holiday cost</span><span class="mdate">${fmt(paidAccommodation)} paid of ${fmt(accommodationBudget)}</span></span>
        <button class="mdel toggle-section-btn" data-trip="${t.id}" data-kind="accommodation" title="Show this section">👁️ Show</button>
      </div>` : `
      <div class="subhead" style="margin-top:10px;">🏖️ Holiday cost${t.accommodationDueDate ? `<span class="pill" style="${(accommodationBudget-paidAccommodation)>0.001 && t.accommodationDueDate < toDateStr(new Date()) ? 'background:var(--bad);color:#fff;' : ''}">⏰ Due ${fmtDate(t.accommodationDueDate)}</span>` : ''}
        <button class="mdel toggle-section-btn" data-trip="${t.id}" data-kind="accommodation" title="Hide this section" style="margin-left:auto;">🙈 Hide</button>
      </div>
      <div class="bar-bg"><div class="bar-fill" style="width:${accPct}%"></div></div>
      <div class="trip-summary">
        ${paidStatHtml('accommodation', paidAccommodationFromPayments, paidAccommodation)}
        ${budgetStatHtml('accommodation', accommodationBudget)}
        <div class="mini-stat">${(accommodationBudget-paidAccommodation)>=0?'Left to pay':'Over by'}<b>${fmt(Math.abs(accommodationBudget-paidAccommodation))}</b></div>
      </div>
      ${upcomingHtml('accommodation')}
      ${quickAddHtml('accommodation')}
      `}
      ${t.spendingHidden ? `
      <div class="mini-row">
        <span><span class="mname">🎒 Spending money</span><span class="mdate">${fmt(paidSpending)} paid of ${fmt(spendingBudget)}</span></span>
        <button class="mdel toggle-section-btn" data-trip="${t.id}" data-kind="spending" title="Show this section">👁️ Show</button>
      </div>` : `
      <div class="subhead">🎒 Spending money${t.spendingDueDate ? `<span class="pill" style="${(spendingBudget-paidSpending)>0.001 && t.spendingDueDate < toDateStr(new Date()) ? 'background:var(--bad);color:#fff;' : ''}">⏰ Due ${fmtDate(t.spendingDueDate)}</span>` : ''}
        <button class="mdel toggle-section-btn" data-trip="${t.id}" data-kind="spending" title="Hide this section" style="margin-left:auto;">🙈 Hide</button>
      </div>
      <div class="bar-bg"><div class="bar-fill" style="width:${spendPct}%"></div></div>
      <div class="trip-summary">
        ${paidStatHtml('spending', paidSpendingFromPayments, paidSpending)}
        ${budgetStatHtml('spending', spendingBudget)}
        <div class="mini-stat">${(spendingBudget-paidSpending)>=0?'Left to pay':'Over by'}<b>${fmt(Math.abs(spendingBudget-paidSpending))}</b></div>
      </div>
      ${upcomingHtml('spending')}
      ${quickAddHtml('spending')}
      `}
      ${dayPlanHtml()}
      ${paidOther>0 ? `<div class="disclaimer">Plus ${fmt(paidOther)} logged as "other" — tag it Holiday cost or Spending money when you edit it.</div>` : ''}
      <div class="disclaimer" style="text-align:center;">Tap "Paid" or "Budget" to enter an amount manually. Tap "Hide" to tuck a paid-off section away — nothing is deleted.</div>

      <div class="trip-body ${open?'':'hidden'}" data-body="${t.id}">
        <div class="subhead">💳 Payments</div>
        ${(t.payments||[]).length ? t.payments.map(p=>{
          const isEditing = editingTripEntry.tripId===t.id && editingTripEntry.kind==='payments' && editingTripEntry.id===p.id;
          if(isEditing){
            return `
            <form class="miniform edit-trip-entry-form" data-trip="${t.id}" data-kind="payments" data-id="${p.id}">
              <input type="text" name="label" value="${escapeHtml(p.label||'')}" placeholder="Label">
              <input type="date" name="date" value="${p.date||''}">
              <input type="number" name="amount" value="${p.amount}" step="0.01" min="0" required>
              <select name="category">
                <option value="accommodation" ${(!p.category||p.category==='accommodation'||p.category==='other')?'selected':''}>🏖️ Holiday cost</option>
                <option value="spending" ${p.category==='spending'?'selected':''}>🎒 Spending money</option>
              </select>
              <button type="submit" class="btn small">Save</button>
              <button type="button" class="btn small secondary cancel-edit-trip-entry">Cancel</button>
            </form>`;
          }
          const catPill = p.category==='accommodation' ? '🏖️' : (p.category==='spending' ? '🎒' : '');
          const source = sourceLabelFor('trip-'+p.id, p.date);
          const isPaidNow = isPaidEntry('trip-'+p.id, p.date);
          const statusPill = p.date ? (isPaidNow ? ' <span class="pill">paid</span>' : ' <span class="pill" style="background:var(--pink-1);color:var(--text-soft);">📅 upcoming</span>') : '';
          return `
          <div class="mini-row${isPaidNow?' row-paid':''}">
            <span><span class="mname">${catPill?catPill+' ':''}${escapeHtml(p.label||'Payment')}${statusPill}</span>${p.date?`<span class="mdate">${fmtDate(p.date)}${source?' · from '+escapeHtml(source):''}</span>`:''}</span>
            <span style="display:flex;align-items:center;gap:8px;"><span class="amt">${fmt(p.amount)}</span>
              <button class="paid-tick${isPaidNow?' is-done':''}" data-key="trip-${p.id}" data-date="${p.date||''}" title="${isPaidNow?'Paid — tap to untick':'Not paid yet — tap when it goes out'}">${isPaidNow?'✓':'○'}</button>
              <button class="mdel edit-trip-entry-btn" data-trip="${t.id}" data-kind="payments" data-id="${p.id}" title="Edit">✏️</button>
              <button class="mdel" data-trip="${t.id}" data-payment="${p.id}" title="Remove">✕</button>
            </span>
          </div>`;
        }).join('') : `<div class="empty" style="padding:8px 0;">No payments logged yet</div>`}
        <form class="miniform payment-form" data-trip="${t.id}">
          <input type="text" name="label" placeholder="What's this payment for?">
          <input type="date" name="date">
          <input type="number" name="amount" step="0.01" min="0" placeholder="£" required>
          <select name="category">
            <option value="accommodation" selected>🏖️ Holiday cost</option>
            <option value="spending">🎒 Spending money</option>
          </select>
          <button type="submit" class="btn small">Add</button>
        </form>
        <label class="checkline"><input type="checkbox" class="link-expense" data-trip="${t.id}"> also log this as a one-off outgoing in my budget</label>

        ${tripConfirmDelete === t.id ? `
        <div class="confirm-box" style="margin-top:14px;">
          <div class="confirm-text">Delete <b>${escapeHtml(t.name)}</b> completely?<br>This removes its budget, payments and day plan.
            <br><span style="color:var(--text-soft);">You can take it back with the ↩️ Undo button afterwards.</span>
          </div>
          <div class="row-btns">
            <button class="btn small confirm-del-trip" data-trip="${t.id}" style="flex:1;background:var(--bad);box-shadow:none;">Yes, delete it</button>
            <button class="btn small secondary cancel-del-trip" style="flex:1;">Cancel</button>
          </div>
        </div>` : `
        <div class="row-btns" style="margin-top:14px;">
          <button class="btn small del-trip" data-trip="${t.id}" style="background:var(--bad);box-shadow:none;">🗑️ Delete whole trip</button>
        </div>`}
      </div>
    </div>
  `;
}

function wireTripEvents(){
  const el = document.getElementById('tab-trips');

  el.querySelectorAll('[data-toggle]').forEach(row=>{
    row.addEventListener('click', (e)=>{
      if(e.target.closest('.edit-trip-details-btn')) return;
      const id = row.dataset.toggle;
      openTripId = (openTripId === id) ? null : id;
      renderTrips();
    });
  });

  el.querySelectorAll('.edit-trip-details-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      editingTripDetailsId = btn.dataset.trip;
      renderTrips();
    });
  });
  el.querySelectorAll('.cancel-edit-trip-details').forEach(btn=>{
    btn.addEventListener('click', ()=>{ editingTripDetailsId = null; renderTrips(); });
  });
  el.querySelectorAll('.edit-trip-details-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const trip = state.trips.find(x=>x.id===form.dataset.trip);
      if(!trip) return;
      const fd0 = new FormData(form);
      const name = fd0.get('name').trim();
      if(!name) return;
      trip.name = name;
      trip.destination = (fd0.get('destination')||'').trim();
      trip.startDate = fd0.get('startDate')||'';
      trip.endDate = fd0.get('endDate')||'';
      trip.accommodationBudget = parseFloat(fd0.get('accommodationBudget'))||0;
      trip.spendingBudget = parseFloat(fd0.get('spendingBudget'))||0;
      trip.accommodationDueDate = fd0.get('accommodationDueDate')||'';
      trip.spendingDueDate = fd0.get('spendingDueDate')||'';
      editingTripDetailsId = null;
      await persist();
    });
  });

  const tripForm = el.querySelector('#tripForm');
  tripForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(tripForm);
    const t = {
      id: uid(),
      name: fd.get('name').trim(),
      destination: (fd.get('destination')||'').trim(),
      startDate: fd.get('startDate')||'',
      endDate: fd.get('endDate')||'',
      accommodationBudget: parseFloat(fd.get('accommodationBudget'))||0,
      spendingBudget: parseFloat(fd.get('spendingBudget'))||0,
      accommodationDueDate: fd.get('accommodationDueDate')||'',
      spendingDueDate: fd.get('spendingDueDate')||'',
      payments: [],
      itinerary: []
    };
    if(!t.name) return;
    state.trips.push(t);
    openTripId = t.id;
    tripForm.reset();
    await persist();
  });

  el.querySelectorAll('.payment-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const tripId = form.dataset.trip;
      const fd = new FormData(form);
      const amount = parseFloat(fd.get('amount'));
      if(isNaN(amount)) return;
      const trip = state.trips.find(x=>x.id===tripId);
      if(!trip) return;
      const payment = { id: uid(), label: (fd.get('label')||'').trim() || 'Payment', date: fd.get('date')||'', amount, category: fd.get('category')||'other' };
      trip.payments = trip.payments || [];
      trip.payments.push(payment);

      const linkBox = el.querySelector(`.link-expense[data-trip="${tripId}"]`);
      if(linkBox && linkBox.checked){
        state.expenses.push({ id: uid(), name: trip.name + ' – ' + payment.label, amount, frequency: 'oneoff' });
      }
      openTripId = tripId;
      await persist();
    });
  });

  el.querySelectorAll('.itinerary-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const tripId = form.dataset.trip;
      const fd = new FormData(form);
      const label = (fd.get('label')||'').trim();
      if(!label) return;
      const trip = state.trips.find(x=>x.id===tripId);
      if(!trip) return;
      trip.itinerary = trip.itinerary || [];
      trip.itinerary.push({ id: uid(), label, date: fd.get('date')||'', cost: parseFloat(fd.get('cost'))||0 });
      openTripId = tripId;
      await persist();
    });
  });

  el.querySelectorAll('.mdel:not(.edit-trip-entry-btn):not(.toggle-itinerary-paid):not(.toggle-section-btn):not(.paid-tick)').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const tripId = btn.dataset.trip;
      const trip = state.trips.find(x=>x.id===tripId);
      if(!trip) return;
      if(btn.dataset.payment) trip.payments = (trip.payments||[]).filter(p=>p.id!==btn.dataset.payment);
      if(btn.dataset.itinerary) trip.itinerary = (trip.itinerary||[]).filter(i=>i.id!==btn.dataset.itinerary);
      openTripId = tripId;
      await persist();
    });
  });

  el.querySelectorAll('.toggle-itinerary-paid').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const tripId = btn.dataset.trip;
      const trip = state.trips.find(x=>x.id===tripId);
      if(!trip) return;
      const item = (trip.itinerary||[]).find(i=>i.id===btn.dataset.id);
      if(!item) return;
      item.paid = !item.paid;
      openTripId = tripId;
      await persist();
    });
  });

  el.querySelectorAll('.toggle-section-btn').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const trip = state.trips.find(x=>x.id===btn.dataset.trip);
      if(!trip) return;
      const kind = btn.dataset.kind;
      if(kind === 'accommodation') trip.accommodationHidden = !trip.accommodationHidden;
      else trip.spendingHidden = !trip.spendingHidden;
      openTripId = trip.id;
      await persist();
    });
  });

  el.querySelectorAll('.edit-trip-entry-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      editingTripEntry = { tripId: btn.dataset.trip, kind: btn.dataset.kind, id: btn.dataset.id };
      openTripId = btn.dataset.trip;
      renderTrips();
    });
  });
  el.querySelectorAll('.cancel-edit-trip-entry').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      editingTripEntry = { tripId: null, kind: null, id: null };
      renderTrips();
    });
  });
  el.querySelectorAll('.edit-trip-entry-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const tripId = form.dataset.trip, kind = form.dataset.kind, id = form.dataset.id;
      const trip = state.trips.find(x=>x.id===tripId);
      if(!trip) return;
      const fd = new FormData(form);
      if(kind === 'payments'){
        const amount = parseFloat(fd.get('amount'));
        if(isNaN(amount)) return;
        const p = (trip.payments||[]).find(x=>x.id===id);
        if(p){ p.label = (fd.get('label')||'').trim() || 'Payment'; p.date = fd.get('date')||''; p.amount = amount; p.category = fd.get('category')||'other'; }
      } else {
        const label = (fd.get('label')||'').trim();
        if(!label) return;
        const i = (trip.itinerary||[]).find(x=>x.id===id);
        if(i){ i.label = label; i.date = fd.get('date')||''; i.cost = parseFloat(fd.get('cost'))||0; }
      }
      editingTripEntry = { tripId: null, kind: null, id: null };
      openTripId = tripId;
      await persist();
    });
  });

  el.querySelectorAll('.del-trip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tripConfirmDelete = btn.dataset.trip;
      openTripId = btn.dataset.trip;
      renderTrips();
    });
  });
  el.querySelectorAll('.cancel-del-trip').forEach(btn=>{
    btn.addEventListener('click', ()=>{ tripConfirmDelete = null; renderTrips(); });
  });
  el.querySelectorAll('.confirm-del-trip').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      tripConfirmDelete = null;
      state.trips = state.trips.filter(x=>x.id!==btn.dataset.trip);
      openTripId = null;
      await persist();
    });
  });

  wirePaidTicks(el);

  el.querySelectorAll('.trip-panel-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const k = btn.dataset.key;
      tripPanels[k] = !tripPanels[k];
      renderTrips();
    });
  });

  el.querySelectorAll('.trip-paid-tap').forEach(div=>{
    div.addEventListener('click', ()=>{
      editingTripPaidFor = { tripId: div.dataset.trip, kind: div.dataset.kind };
      renderTrips();
    });
  });
  el.querySelectorAll('.cancel-edit-trip-paid').forEach(btn=>{
    btn.addEventListener('click', ()=>{ editingTripPaidFor = null; renderTrips(); });
  });
  el.querySelectorAll('.edit-trip-paid-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const trip = state.trips.find(x=>x.id===form.dataset.trip);
      if(!trip) return;
      const kind = form.dataset.kind;
      const fd7 = new FormData(form);
      const newTotal = parseFloat(fd7.get('paid'));
      if(isNaN(newTotal)) return;
      const { paidAccommodationFromPayments, paidSpendingFromPayments, itineraryPaid } = tripTotals(trip);
      if(kind === 'accommodation'){
        trip.accommodationPaidExtra = newTotal - paidAccommodationFromPayments - itineraryPaid;
      } else {
        trip.spendingPaidExtra = newTotal - paidSpendingFromPayments;
      }
      editingTripPaidFor = null;
      openTripId = trip.id;
      await persist();
    });
  });

  el.querySelectorAll('.trip-budget-tap').forEach(div=>{
    div.addEventListener('click', ()=>{
      editingTripBudgetFor = { tripId: div.dataset.trip, kind: div.dataset.kind };
      renderTrips();
    });
  });
  el.querySelectorAll('.cancel-edit-trip-budget').forEach(btn=>{
    btn.addEventListener('click', ()=>{ editingTripBudgetFor = null; renderTrips(); });
  });
  el.querySelectorAll('.edit-trip-budget-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const trip = state.trips.find(x=>x.id===form.dataset.trip);
      if(!trip) return;
      const kind = form.dataset.kind;
      const fd9 = new FormData(form);
      const newBudget = parseFloat(fd9.get('budget'));
      if(isNaN(newBudget)) return;
      if(kind === 'accommodation'){
        trip.accommodationBudget = newBudget;
      } else {
        trip.spendingBudget = newBudget;
      }
      editingTripBudgetFor = null;
      openTripId = trip.id;
      await persist();
    });
  });

  el.querySelectorAll('.trip-quickadd-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tripQuickAddFor = { tripId: btn.dataset.trip, kind: btn.dataset.kind };
      openTripId = btn.dataset.trip;
      renderTrips();
    });
  });
  el.querySelectorAll('.cancel-trip-quickadd').forEach(btn=>{
    btn.addEventListener('click', ()=>{ tripQuickAddFor = null; renderTrips(); });
  });
  el.querySelectorAll('.trip-quickadd-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const trip = state.trips.find(x=>x.id===form.dataset.trip);
      if(!trip) return;
      const kind = form.dataset.kind;
      const fd8 = new FormData(form);
      const label = (fd8.get('label')||'').trim();
      const amount = parseFloat(fd8.get('amount'));
      if(!label || isNaN(amount)) return;
      trip.payments = trip.payments || [];
      trip.payments.push({ id: uid(), label, date: fd8.get('date')||'', amount, category: kind });
      tripQuickAddFor = null;
      openTripId = trip.id;
      await persist();
    });
  });
}

/* ---------- Calendar (a browsable, editable month-by-month ledger) ---------- */
function toDateStr(d){
  const y = d.getFullYear();
  const m = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function addInterval(date, frequency){
  const d = new Date(date);
  if(frequency==='monthly'){ d.setMonth(d.getMonth()+1); }
  else if(frequency==='fourweekly'){ d.setDate(d.getDate()+28); }
  else if(frequency==='weekly'){ d.setDate(d.getDate()+7); }
  else { d.setDate(d.getDate()+3650); } // oneoff: never repeats
  return d;
}
function nextOccurrenceFromToday(item){
  if(!item.date) return null;
  let d = new Date(item.date+"T00:00:00");
  if(isNaN(d.getTime())) return null;
  if(item.frequency === 'oneoff') return d;
  const today = new Date(); today.setHours(0,0,0,0);
  let guard = 0;
  while(d < today && guard < 1000){ d = addInterval(d, item.frequency); guard++; }
  if(item.endDate && toDateStr(d) > item.endDate) return null;
  return d;
}
function subtractInterval(date, frequency){
  const d = new Date(date);
  if(frequency==='monthly'){ d.setMonth(d.getMonth()-1); }
  else if(frequency==='fourweekly'){ d.setDate(d.getDate()-28); }
  else if(frequency==='weekly'){ d.setDate(d.getDate()-7); }
  else { d.setDate(d.getDate()-3650); }
  return d;
}
function occursOnDate(item, dateStr){
  if(!item.date) return false;
  const day = new Date(dateStr+"T00:00:00");
  if(item.endDate && dateStr > item.endDate) return false;
  let d = new Date(item.date+"T00:00:00");
  if(isNaN(d.getTime())) return false;
  if(item.frequency === 'oneoff') return d.getTime() === day.getTime();
  if(d > day) return false;
  let guard = 0;
  while(d < day && guard < 3000){ d = addInterval(d, item.frequency); guard++; }
  return d.getTime() === day.getTime();
}
function incomeSourceForDate(dateStr){
  if(!dateStr) return '';
  const names = state.incomes.filter(i=>occursOnDate(i, dateStr)).map(i=>i.name);
  return names.join(' & ');
}
// A payment counts as paid if it has been marked one way or the other;
// otherwise we fall back to whether its date has already gone by.
function isPaidEntry(key, dateStr){
  const marks = state.paidMarks || {};
  if(key && Object.prototype.hasOwnProperty.call(marks, key)) return !!marks[key];
  return !!dateStr && dateStr <= toDateStr(new Date());
}

function incomeNameById(id){
  if(!id) return '';
  const i = state.incomes.find(x=>x.id===id);
  return i ? i.name : '';
}
// Works out on its own which payment each outgoing comes from, so nobody has
// to say. Everything landing on a date is taken from that date's payments in
// turn: the first payment covers what it can, then the next one picks up the
// rest, and so on.
function allocateForDate(dateStr){
  const out = {};
  if(!dateStr) return out;
  const day = new Date(dateStr+"T00:00:00");
  const incs = state.incomes.filter(i=>occursOnDate(i, dateStr) && !isSkipped(i.id, day));
  if(!incs.length) return out;
  // Biggest payment first: when several land on the same day, the large one
  // (Universal Credit, normally) picks up the household bills, and the smaller
  // ones take whatever is left over.
  const pots = incs
    .map(i=>({ id:i.id, left: getEffectiveAmount(i, day) }))
    .sort((a,b)=> b.left - a.left);

  const items = [];
  state.expenses.forEach(x=>{
    if(occursOnDate(x, dateStr) && !isSkipped(x.id, day)){
      items.push({ key:x.id, amount:getEffectiveAmount(x, day), pin:x.fromIncome||'' });
    }
  });
  state.trips.forEach(t=>(t.payments||[]).forEach(p=>{
    if(p.date === dateStr) items.push({ key:'trip-'+p.id, amount:Number(p.amount)||0, pin:p.fromIncome||'' });
  }));

  // Anything added straight onto a payment stays on that payment.
  const byId = {};
  pots.forEach(pt=>{ byId[pt.id] = pt; });
  items.forEach(it=>{
    if(it.pin && byId[it.pin]){
      out[it.key] = it.pin;
      byId[it.pin].left -= it.amount;
    }
  });

  items.forEach(it=>{
    if(out[it.key]) return;
    // Take it from the biggest payment that can still cover it. Only when
    // none of them can does it fall to whichever has the most left.
    let pot = pots.find(p=> p.left >= it.amount - 0.001);
    if(!pot) pot = pots.reduce((a,b)=> b.left > a.left ? b : a);
    out[it.key] = pot.id;
    pot.left -= it.amount;
  });
  return out;
}
function sourceLabelFor(key, dateStr){
  const name = incomeNameById(allocateForDate(dateStr)[key]);
  return name || incomeSourceForDate(dateStr);
}
function monthKeyFromDate(d){ return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0'); }
function monthEndOf(monthStart){ return new Date(monthStart.getFullYear(), monthStart.getMonth()+1, 0); }
function occurrencesInMonth(item, monthStart, monthEnd){
  if(!item.date) return [];
  let d = new Date(item.date+"T00:00:00");
  if(isNaN(d.getTime())) return [];
  const results = [];
  if(item.frequency === 'oneoff'){
    if(d>=monthStart && d<=monthEnd) results.push(new Date(d));
    return results;
  }
  if(item.endDate && item.endDate < toDateStr(monthStart)) return results;
  if(d > monthEnd) return results;
  let guard = 0;
  while(d < monthStart && guard < 1000){ d = addInterval(d, item.frequency); guard++; }
  const stopAt = item.endDate ? new Date(item.endDate+"T00:00:00") : null;
  guard = 0;
  while(d <= monthEnd && guard < 50){
    if(stopAt && d > stopAt) break;
    results.push(new Date(d));
    d = addInterval(d, item.frequency);
    guard++;
  }
  return results;
}
function overrideKey(itemId, date){ return itemId + '|' + monthKeyFromDate(date); }
function getEffectiveAmount(item, occDate){
  const key = overrideKey(item.id, occDate);
  if(state.overrides && Object.prototype.hasOwnProperty.call(state.overrides, key)) return Number(state.overrides[key])||0;
  return Number(item.amount)||0;
}
function isSkipped(itemId, date){
  return !!(state.skips && state.skips[overrideKey(itemId, date)]);
}
function nextIncomeAfter(afterDate, monthsAhead){
  const searchStart = new Date(afterDate); searchStart.setDate(searchStart.getDate()+1);
  const searchEnd = new Date(afterDate); searchEnd.setMonth(searchEnd.getMonth()+(monthsAhead||3));
  let best = null;
  state.incomes.forEach(i=>{
    if(!i.date) return;
    let d = new Date(i.date+"T00:00:00");
    if(isNaN(d.getTime())) return;
    if(i.frequency === 'oneoff'){
      if(d>=searchStart && d<=searchEnd && (!best || d<best.date)) best = {date:d, name:i.name, amount:getEffectiveAmount(i,d)};
      return;
    }
    let guard=0;
    while(d<searchStart && guard<1000){ d=addInterval(d,i.frequency); guard++; }
    if(i.endDate && toDateStr(d) > i.endDate) return;
    if(d<=searchEnd && (!best || d<best.date)) best = {date:d, name:i.name, amount:getEffectiveAmount(i,d)};
  });
  return best;
}

function renderCalendar(){
  const el = document.getElementById('tab-calendar');
  const monthStart = calViewMonth;
  const monthEnd = monthEndOf(monthStart);
  const monthLabel = monthStart.toLocaleDateString('en-GB', {month:'long', year:'numeric'});
  const isCurrentMonth = monthKeyFromDate(monthStart) === monthKeyFromDate(new Date());

  const todayStr = toDateStr(new Date());

  let entries = [];
  state.incomes.forEach(i=>{
    occurrencesInMonth(i, monthStart, monthEnd).forEach(d=>{
      if(isSkipped(i.id, d)) return;
      entries.push({ kind:'income', itemId:i.id, name:i.name, date:d, amount:getEffectiveAmount(i,d), recurring: i.frequency!=='oneoff', hasOverride: Object.prototype.hasOwnProperty.call(state.overrides, overrideKey(i.id,d)) });
    });
  });
  state.expenses.forEach(i=>{
    occurrencesInMonth(i, monthStart, monthEnd).forEach(d=>{
      if(isSkipped(i.id, d)) return;
      entries.push({ kind:'expense', itemId:i.id, name:i.name, date:d, amount:getEffectiveAmount(i,d), recurring: i.frequency!=='oneoff', hasOverride: Object.prototype.hasOwnProperty.call(state.overrides, overrideKey(i.id,d)) });
    });
  });
  state.trips.forEach(t=>{
    (t.payments||[]).forEach(p=>{
      if(!p.date) return;
      const d = new Date(p.date+"T00:00:00");
      if(d>=monthStart && d<=monthEnd){
        entries.push({ kind:'expense', itemId:null, tripId:t.id, paymentId:p.id, name: t.name + ' – ' + (p.label||'Payment'), date:d, amount:Number(p.amount)||0, recurring:false, isTrip:true });
      }
    });
  });
  entries.sort((a,b)=>a.date-b.date);

  const totalIncome = entries.filter(e=>e.kind==='income').reduce((s,e)=>s+e.amount,0);
  const totalExpense = entries.filter(e=>e.kind==='expense').reduce((s,e)=>s+e.amount,0);
  const remaining = totalIncome - totalExpense;

  const rows = entries.map(e=>{
    const rowKey = e.itemId ? overrideKey(e.itemId, e.date) : ('trip-'+e.tripId+'-'+e.date.getTime());
    if(editingMonthEntry === rowKey){
      return `
        <form class="miniform edit-month-entry-form" data-item="${e.itemId||''}" data-date="${toDateStr(e.date)}" data-kind="${e.kind}" data-trip="${e.tripId||''}">
          <span style="flex:1 0 100%;font-size:0.76rem;color:var(--text-soft);">Renaming changes it everywhere · the amount changes just this date</span>
          <input type="text" name="name" value="${escapeHtml(e.name)}" required style="flex:2;min-width:120px;">
          <input type="number" name="amount" value="${e.amount}" step="0.01" min="0" required style="flex:1;min-width:90px;">
          <button type="submit" class="btn small">Save</button>
          <button type="button" class="btn small secondary cancel-edit-month-entry">Cancel</button>
        </form>`;
    }
    const tickKey = e.isTrip ? ('trip-'+e.paymentId) : (e.itemId + '@' + toDateStr(e.date));
    const tickDone = tickKey ? isPaidEntry(tickKey, toDateStr(e.date)) : false;
    return `
      <div class="cal-line${tickDone?' line-paid':''}">
        <span class="cname ${e.isTrip?'cal-name-trip':'cal-name-tap'}"
          ${e.isTrip
            ? `data-trip="${e.tripId}"`
            : `data-item="${e.itemId}" data-date="${toDateStr(e.date)}" data-kind="${e.kind}"`}
          style="cursor:pointer;text-decoration:underline dotted var(--pink-3);text-underline-offset:3px;"
          title="Tap to change">${escapeHtml(e.name)}${e.hasOverride?' <span class="pill">edited</span>':''}</span>
        <span style="display:flex;align-items:center;gap:6px;">
          <span class="camt ${e.kind}">${e.kind==='income'?'+':'−'}${fmt(e.amount)}</span>
          ${tickKey ? `<button class="paid-tick${tickDone?' is-done':''}" data-key="${tickKey}" data-date="${toDateStr(e.date)}"
            title="${e.kind==='income' ? (tickDone?'Arrived — tap to untick':"Hasn't arrived yet — tap when it lands") : (tickDone?'Paid — tap to untick':'Not paid yet — tap when it goes out')}">${tickDone?'✓':'○'}</button>` : ''}
          ${e.isTrip
            ? `<button class="del edit-trip-jump" data-trip="${e.tripId}" title="Manage in Trips">✏️</button>`
            : `<button class="del edit-month-entry-btn" data-item="${e.itemId}" data-date="${toDateStr(e.date)}" data-kind="${e.kind}" title="Edit just this date">✏️</button>`
          }
          ${e.hasOverride ? `<button class="del reset-override" data-item="${e.itemId}" data-date="${toDateStr(e.date)}" title="Reset to usual amount">↺</button>` : ''}
          ${e.isTrip
            ? `<button class="del del-trip-payment-cal" data-trip="${e.tripId}" data-payment="${e.paymentId}" title="Remove this payment">✕</button>`
            : (e.recurring
                ? `<button class="del skip-occurrence" data-item="${e.itemId}" data-date="${toDateStr(e.date)}" data-kind="${e.kind}" title="Remove just from this date">✕</button>`
                : `<button class="del del-oneoff-cal" data-item="${e.itemId}" data-kind="${e.kind}" title="Delete this payment">✕</button>`
              )
          }
        </span>
      </div>`;
  });

  // One block per INCOME PAYMENT rather than per day, so two payments landing
  // on the same date stay separate and each shows what's left of its own money.
  const rowFor = new Map();
  entries.forEach((e,i)=>rowFor.set(e, rows[i]));
  const incomeEntries = entries.filter(e=>e.kind==='income');
  const expenseEntries = entries.filter(e=>e.kind==='expense');

  const incomeByDate = {};
  incomeEntries.forEach(e=>{
    const k = toDateStr(e.date);
    (incomeByDate[k] = incomeByDate[k] || []).push(e);
  });

  const blocks = [];
  const claimed = new Set();
  incomeEntries.forEach(inc=>{
    const k = toDateStr(inc.date);
    const alloc = allocateForDate(k);
    const mine = expenseEntries.filter(x=>{
      if(toDateStr(x.date) !== k) return false;
      return alloc[x.isTrip ? ('trip-'+x.paymentId) : x.itemId] === inc.itemId;
    });
    mine.forEach(x=>claimed.add(x));
    const spent = mine.reduce((s,x)=>s+x.amount,0);
    blocks.push({ date: inc.date, key: k, income: inc, expenses: mine, left: inc.amount - spent, ord: blocks.length });
  });

  const strayByDate = {};
  expenseEntries.forEach(x=>{
    if(claimed.has(x)) return;
    const k = toDateStr(x.date);
    (strayByDate[k] = strayByDate[k] || []).push(x);
  });
  Object.keys(strayByDate).forEach(k=>{
    const list = strayByDate[k];
    blocks.push({ date: list[0].date, key: k, income: null, expenses: list, left: 0, ord: blocks.length, stray: incomeByDate[k] ? 'shared' : 'noincome' });
  });

  // date first, then real payments before anything unassigned, then original order
  blocks.sort((a,b)=> (a.date - b.date) || ((a.income?0:1) - (b.income?0:1)) || (a.ord - b.ord));

  const blockParts = blocks.map((b, idx)=>{
    const dayLabel = b.date.toLocaleDateString('en-GB', {day:'numeric', month:'short'}) + ' (' + b.date.toLocaleDateString('en-GB', {weekday:'short'}) + ')';
    const isLastOfDate = !(blocks[idx+1] && blocks[idx+1].key === b.key);

    let nextLine = '';
    if(isLastOfDate){
      const later = blocks.slice(idx+1).find(x=>x.income && x.key !== b.key);
      if(later){
        const days = Math.round((later.date - b.date)/86400000);
        nextLine = `<div class="cal-nextline">Next payment: ${fmtDate(later.key)} – ${escapeHtml(later.income.name)} (${days} day${days===1?'':'s'} later)</div>`;
      } else {
        const nxt = nextIncomeAfter(b.date, 3);
        if(nxt){
          const days = Math.round((nxt.date - b.date)/86400000);
          nextLine = `<div class="cal-nextline">Next payment: ${fmtDate(toDateStr(nxt.date))} – ${escapeHtml(nxt.name)} (${days} day${days===1?'':'s'} later)</div>`;
        }
      }
    }

    const addFormHtml = !isLastOfDate ? '' : (addingForDateKey === b.key ? `
      <form class="miniform add-to-date-form" data-date="${b.key}" style="margin-top:8px;">
        <input type="text" name="name" placeholder="What's it called?" required>
        <input type="number" name="amount" step="0.01" min="0" placeholder="£" required>
        <select name="kind">
          <option value="expense">Outgoing</option>
          <option value="income">Income</option>
        </select>
        ${(incomeByDate[b.key]||[]).length > 1 ? `
        <select name="fromIncome" title="Which payment does it come out of?" style="flex:1 0 100%;">
          ${(incomeByDate[b.key]||[]).map(ie=>`<option value="${ie.itemId}">Comes out of ${escapeHtml(ie.name)}</option>`).join('')}
        </select>` : ''}
        <select name="frequency" title="How often?">
          <option value="oneoff">Just this once</option>
          <option value="monthly">Every month</option>
          <option value="fourweekly">Every 4 weeks</option>
          <option value="weekly">Every week</option>
        </select>
        <button type="submit" class="btn small">Add</button>
        <button type="button" class="btn small secondary cancel-add-to-date">Cancel</button>
      </form>
    ` : `<button class="btn small secondary add-to-date-btn" data-date="${b.key}" style="margin-top:8px;">➕ Add a payment to this date</button>`);

    // Already been and gone, or still to come? Same rule the rest of the app uses.
    const blockKey = b.key + '|' + (b.income ? b.income.itemId : 'stray') + '|' + idx;
    const gone = toDateStr(b.date) < todayStr;
    // Past blocks start folded (you've lived them); upcoming ones start open.
    const isOpen = (blockKey in calBlockOpen) ? calBlockOpen[blockKey] : !gone;
    const arrow = isOpen ? '▲' : '▼';
    const goneTag = gone ? ` <span class="pill" style="background:var(--pink-1);color:var(--text-soft);">already gone</span>` : '';

    if(!b.income){
      return `
      <div class="cal-daygroup${gone?' is-gone':''}" style="border-style:dashed;">
        <div class="cal-daylabel cal-fold" data-block="${blockKey}" style="color:var(--warn);cursor:pointer;">
          <span style="color:var(--pink-4);">${arrow}</span> ${dayLabel} · not linked to a payment yet${goneTag}
        </div>
        ${isOpen ? `
        ${b.expenses.map(x=>rowFor.get(x)).join('')}
        <div class="disclaimer">${b.stray==='shared'
          ? 'More than one payment lands on this date, so these aren\'t counted against any of them yet. Tap ✏️ on each one in Outgoings to say which payment it comes out of.'
          : 'Nothing comes in on this date, so these aren\'t taken off a payment.'}</div>
        ${addFormHtml}` : ''}
      </div>
      ${nextLine}`;
    }

    return `
      <div class="cal-daygroup${gone?' is-gone':''}">
        <div class="cal-daylabel cal-fold" data-block="${blockKey}" style="cursor:pointer;">
          <span style="color:var(--pink-4);">${arrow}</span> ${dayLabel} · ${escapeHtml(b.income.name)}${goneTag}
        </div>
        ${isOpen ? `
        ${rowFor.get(b.income)}
        ${b.expenses.length ? b.expenses.map(x=>rowFor.get(x)).join('') : `<div class="empty" style="padding:6px 0;font-size:0.82rem;">Nothing coming out of this payment</div>`}` : ''}
        <div class="cal-groupfoot">
          <span>${gone ? 'Was left from this payment' : 'Left from this payment'}</span>
          <span style="font-weight:800;color:${b.left<0?'var(--bad)':'var(--good)'};">${fmt(b.left)}</span>
        </div>
        ${isOpen ? addFormHtml : ''}
      </div>
      ${nextLine}`;
  });

  // A clear line for where you are now, dropped in at the right place.
  const todayLineHtml = `<div class="today-line"><span>⭐ Today · ${fmtDate(todayStr)}</span></div>`;
  let groupBlocksHtml = '';
  let todayShown = false;
  blocks.forEach((b, i)=>{
    if(isCurrentMonth && !todayShown && toDateStr(b.date) >= todayStr){
      groupBlocksHtml += todayLineHtml;
      todayShown = true;
    }
    groupBlocksHtml += blockParts[i];
  });
  // Everything this month has already happened, so the line belongs at the end.
  if(isCurrentMonth && !todayShown) groupBlocksHtml += todayLineHtml;

  el.innerHTML = `
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
        <button class="btn small secondary" id="calPrev">← Prev</button>
        <h2 style="margin:0;">📅 ${monthLabel}${isCurrentMonth?' <span class=\"pill\">now</span>':''}</h2>
        <button class="btn small secondary" id="calNext">Next →</button>
      </div>
      <p style="font-size:0.82rem;color:var(--text-soft);text-align:center;margin:2px 0 12px;">Flip through any month and edit it just like the current one — changes here only affect that one month.</p>
      <div class="summary-grid">
        <div class="stat"><div class="label">Coming in</div><div class="value">${fmt(totalIncome)}</div></div>
        <div class="stat"><div class="label">Going out (incl. holidays)</div><div class="value">${fmt(totalExpense)}</div></div>
        <div class="stat remaining full"><div class="label">Left after everything</div><div class="value ${remaining>=0?'good':'bad'}">${fmt(remaining)}</div></div>
      </div>
      ${entries.length ? groupBlocksHtml : `<div class="empty">Nothing lands in ${monthLabel} yet — add a "next payment date" to your income/outgoings, or add an extra just for this month below 🌱</div>`}
    </div>
    <div class="card">
      <h2>➕ Add an extra just for ${monthLabel}</h2>
      <form class="addform" id="monthExtraForm">
        <div>
          <label>What's it called?</label>
          <input type="text" name="name" placeholder="e.g. Christmas presents" required>
        </div>
        <div>
          <label>Amount (£)</label>
          <input type="number" name="amount" step="0.01" min="0" required>
        </div>
        <div>
          <label>Income or outgoing?</label>
          <select name="kind">
            <option value="expense">Outgoing (spending)</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label>Date within ${monthLabel}</label>
          <input type="date" name="date" min="${toDateStr(monthStart)}" max="${toDateStr(monthEnd)}" value="${toDateStr(monthStart)}" required>
        </div>
        <button type="submit" class="btn">Add to this month 🩷</button>
      </form>
    </div>
  `;

  document.getElementById('calPrev').addEventListener('click', ()=>{
    calViewMonth = new Date(calViewMonth.getFullYear(), calViewMonth.getMonth()-1, 1);
    editingMonthEntry = null;
    renderAll();
  });
  document.getElementById('calNext').addEventListener('click', ()=>{
    calViewMonth = new Date(calViewMonth.getFullYear(), calViewMonth.getMonth()+1, 1);
    editingMonthEntry = null;
    renderAll();
  });

  wirePaidTicks(el);

  el.querySelectorAll('.cal-fold').forEach(h=>{
    h.addEventListener('click', ()=>{
      const k = h.dataset.block;
      const gone = h.textContent.includes('already gone');
      const current = (k in calBlockOpen) ? calBlockOpen[k] : !gone;
      calBlockOpen[k] = !current;
      renderCalendar();
    });
  });

  el.querySelectorAll('.cal-name-tap').forEach(sp=>{
    sp.addEventListener('click', ()=>{
      editingMonthEntry = overrideKey(sp.dataset.item, new Date(sp.dataset.date+"T00:00:00"));
      renderCalendar();
    });
  });
  el.querySelectorAll('.cal-name-trip').forEach(sp=>{
    sp.addEventListener('click', ()=>{
      openTripId = sp.dataset.trip;
      document.querySelector('nav.tabs button[data-tab="trips"]').click();
    });
  });

  el.querySelectorAll('.edit-month-entry-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      editingMonthEntry = overrideKey(btn.dataset.item, new Date(btn.dataset.date+"T00:00:00"));
      renderCalendar();
    });
  });
  el.querySelectorAll('.cancel-edit-month-entry').forEach(btn=>{
    btn.addEventListener('click', ()=>{ editingMonthEntry = null; renderCalendar(); });
  });
  el.querySelectorAll('.edit-month-entry-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const itemId = form.dataset.item;
      const date = new Date(form.dataset.date+"T00:00:00");
      const fd = new FormData(form);
      const amount = parseFloat(fd.get('amount'));
      if(isNaN(amount)) return;
      // The name belongs to the item itself, so renaming here renames it on
      // every date. The amount stays a change to this one date only.
      const listKey = form.dataset.kind === 'income' ? 'incomes' : 'expenses';
      const newName = (fd.get('name')||'').trim();
      const item = state[listKey].find(x=>x.id===itemId);
      if(item && newName) item.name = newName;
      state.overrides = state.overrides || {};
      state.overrides[overrideKey(itemId, date)] = amount;
      editingMonthEntry = null;
      await persist();
    });
  });
  el.querySelectorAll('.reset-override').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const key = overrideKey(btn.dataset.item, new Date(btn.dataset.date+"T00:00:00"));
      if(state.overrides) delete state.overrides[key];
      await persist();
    });
  });
  el.querySelectorAll('.edit-trip-jump').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      openTripId = btn.dataset.trip;
      document.querySelector('nav.tabs button[data-tab="trips"]').click();
    });
  });

  el.querySelectorAll('.skip-occurrence').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const key = overrideKey(btn.dataset.item, new Date(btn.dataset.date+"T00:00:00"));
      state.skips = state.skips || {};
      state.skips[key] = true;
      await persist();
    });
  });
  el.querySelectorAll('.del-oneoff-cal').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const k = btn.dataset.kind === 'income' ? 'incomes' : 'expenses';
      state[k] = state[k].filter(x=>x.id!==btn.dataset.item);
      await persist();
    });
  });
  el.querySelectorAll('.del-trip-payment-cal').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const trip = state.trips.find(x=>x.id===btn.dataset.trip);
      if(trip) trip.payments = (trip.payments||[]).filter(p=>p.id!==btn.dataset.payment);
      await persist();
    });
  });

  el.querySelectorAll('.add-to-date-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      addingForDateKey = btn.dataset.date;
      renderCalendar();
    });
  });
  el.querySelectorAll('.cancel-add-to-date').forEach(btn=>{
    btn.addEventListener('click', ()=>{ addingForDateKey = null; renderCalendar(); });
  });
  el.querySelectorAll('.add-to-date-form').forEach(form=>{
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const date = form.dataset.date;
      const fd = new FormData(form);
      const name = fd.get('name').trim();
      const amount = parseFloat(fd.get('amount'));
      const isIncome = fd.get('kind') === 'income';
      const kindKey = isIncome ? 'incomes' : 'expenses';
      if(!name || isNaN(amount)) return;
      const entry = { id: uid(), name, amount, frequency: fd.get('frequency') || 'oneoff', date };
      const pick = fd.get('fromIncome');
      if(!isIncome && pick) entry.fromIncome = pick;   // stays on the payment you chose
      state[kindKey].push(entry);
      addingForDateKey = null;
      await persist();
    });
  });

  const extraForm = document.getElementById('monthExtraForm');
  extraForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const fd = new FormData(extraForm);
    const name = fd.get('name').trim();
    const amount = parseFloat(fd.get('amount'));
    const kindKey = fd.get('kind') === 'income' ? 'incomes' : 'expenses';
    const date = fd.get('date');
    if(!name || isNaN(amount) || !date) return;
    state[kindKey].push({ id: uid(), name, amount, frequency: 'oneoff', date });
    extraForm.reset();
    await persist();
  });
}

/* ---------- Search ---------- */
function monthsInRange(startYear, startMonthIdx, count){
  const arr = [];
  let d = new Date(startYear, startMonthIdx, 1);
  for(let i=0;i<count;i++){
    arr.push(new Date(d));
    d = new Date(d.getFullYear(), d.getMonth()+1, 1);
  }
  return arr;
}
const SEARCH_MONTHS = monthsInRange(2026, 0, 30); // Jan 2026 through June 2028

// Search results are grouped so the different kinds of record can't be mistaken
// for each other — a holiday instalment, spending money and a day-plan note can
// all be the same amount on the same date and look like duplicates otherwise.
const SEARCH_GROUPS = [
  { key:'holiday-cost',     label:'🏖️ Holiday cost' },
  { key:'holiday-spending', label:'🎒 Holiday spending money' },
  { key:'outgoing',         label:'🧾 Outgoings' },
  { key:'income',           label:'💌 Income' },
  { key:'day-plan',         label:'🗺️ Day plan', note:'Day-plan notes are what you\'ve sketched out for your days away — they\'re not counted in the totals above, so they can sit alongside a real payment for the same money.' }
];

function performSearch(query){
  const q = query.trim().toLowerCase();
  if(!q) return [];
  let results = [];

  state.trips.forEach(t=>{
    const tripMatches = (t.name||'').toLowerCase().includes(q) || (t.destination||'').toLowerCase().includes(q);
    (t.payments||[]).forEach(p=>{
      const labelMatch = (p.label||'').toLowerCase().includes(q);
      if((tripMatches || labelMatch) && p.date){
        results.push({
          date: p.date,
          name: (p.label||'Payment'),
          trip: t.name,
          amount: Number(p.amount)||0,
          kind: 'expense',
          akey: 'trip-'+p.id,
          pkey: 'trip-'+p.id,
          group: p.category === 'spending' ? 'holiday-spending' : 'holiday-cost'
        });
      }
    });
    (t.itinerary||[]).forEach(i=>{
      const labelMatch = (i.label||'').toLowerCase().includes(q);
      if((tripMatches || labelMatch) && i.date && i.cost){
        results.push({
          date: i.date,
          name: i.label,
          trip: t.name,
          amount: Number(i.cost)||0,
          kind: 'expense',
          group: 'day-plan'
        });
      }
    });
  });

  const searchRecurring = (list, kind, group)=>{
    list.forEach(x=>{
      if(!(x.name||'').toLowerCase().includes(q)) return;
      if(x.frequency === 'oneoff'){
        if(x.date) results.push({ date: x.date, name: x.name, amount: Number(x.amount)||0, kind, group, akey: x.id, pkey: x.id+'@'+x.date });
      } else {
        SEARCH_MONTHS.forEach(ms=>{
          const me = monthEndOf(ms);
          occurrencesInMonth(x, ms, me).forEach(d=>{
            if(isSkipped(x.id, d)) return;
            results.push({ date: toDateStr(d), name: x.name, amount: getEffectiveAmount(x,d), kind, group, akey: x.id, pkey: x.id+'@'+toDateStr(d) });
          });
        });
      }
    });
  };
  searchRecurring(state.expenses, 'expense', 'outgoing');
  searchRecurring(state.incomes, 'income', 'income');

  return results;
}

function renderSearch(){
  const el = document.getElementById('tab-search');
  if(!el) return;
  const wasFocused = document.activeElement && document.activeElement.id === 'searchInput';
  const caret = wasFocused ? document.activeElement.selectionStart : null;
  el.innerHTML = `
    <div class="card">
      <h2>🔍 Search everything</h2>
      <p style="font-size:0.85rem;color:var(--text-soft);margin-top:-4px;">Type a name — like "Grange Park", "Haven" or "Christmas" — to see every matching payment and how much it comes to.</p>
      <input type="text" id="searchInput" placeholder="Search income, outgoings and trips..." value="${escapeHtml(searchQuery)}" style="width:100%;padding:11px 14px;border-radius:14px;border:1.5px solid var(--border);background:var(--pink-1);color:var(--text);font-size:0.95rem;">
    </div>
    <div id="searchResultsWrap"></div>
  `;
  const input = document.getElementById('searchInput');
  input.addEventListener('input', ()=>{
    searchQuery = input.value;
    renderSearchResults();
  });
  if(wasFocused){
    input.focus();
    if(caret!=null) input.setSelectionRange(caret, caret);
  }
  renderSearchResults();
}

function searchManageHtml(q){
  const ql = q.trim().toLowerCase();
  if(!ql) return '';
  const matched = [];
  state.incomes.forEach(x=>{ if((x.name||'').toLowerCase().includes(ql)) matched.push({ x, listKey:'incomes' }); });
  state.expenses.forEach(x=>{ if((x.name||'').toLowerCase().includes(ql)) matched.push({ x, listKey:'expenses' }); });
  if(!matched.length) return '';
  return `
    <div class="card">
      <h2>🛠️ Change these</h2>
      <p style="font-size:0.82rem;color:var(--text-soft);margin-top:-6px;">Change something here and it updates every date it appears on, all at once.</p>
      ${matched.map(({x, listKey})=>{
        const repeats = x.frequency !== 'oneoff';
        const stopped = !!x.endDate;
        if(searchEditingItemId === x.id){
          return `
          <form class="miniform search-edit-form" data-id="${x.id}" data-list="${listKey}" style="margin-bottom:10px;">
            <span style="flex:1 0 100%;font-size:0.8rem;font-weight:700;color:var(--text-soft);">Change ${escapeHtml(x.name)}</span>
            <input type="text" name="name" value="${escapeHtml(x.name)}" required style="flex:2;min-width:140px;">
            <input type="number" name="amount" value="${x.amount}" step="0.01" min="0" required style="flex:1;min-width:90px;">
            ${x.frequency!=='oneoff' ? `
            <span style="flex:1 0 100%;font-size:0.78rem;color:var(--text-soft);margin-top:4px;">Changes from this date onwards — leave empty to change every one, past included</span>
            <input type="date" name="fromDate" style="flex:2;">` : ''}
            <button type="submit" class="btn small">Save</button>
            <button type="button" class="btn small secondary search-edit-cancel">Cancel</button>
          </form>`;
        }
        // Spell out the date and which payment it comes out of, so two
        // entries with the same name and amount can be told apart.
        const when = x.date ? nextOccurrenceFromToday(x) : null;
        const whenStr = (when && !isNaN(when.getTime())) ? toDateStr(when) : '';
        const src = (listKey === 'expenses' && whenStr) ? incomeNameById(allocateForDate(whenStr)[x.id]) : '';
        const bits = [fmt(x.amount), repeats ? freqLabel(x.frequency) : 'one-off'];
        if(whenStr) bits.push((repeats ? 'next ' : '') + fmtDate(whenStr));
        if(src) bits.push('from ' + src);
        const metaRow = `
          <div class="mini-row" style="border-bottom:none;padding-bottom:2px;">
            <span>
              <span class="mname">${escapeHtml(x.name)}</span>
              <span class="mdate">${bits.map(escapeHtml).join(' · ')}${stopped?` · <b style="color:var(--warn);">stopped after ${fmtDate(x.endDate)}</b>`:''}</span>
            </span>
          </div>`;
        if(searchConfirm && searchConfirm.id === x.id){
          const isDel = searchConfirm.action === 'del';
          return metaRow + `
          <div class="confirm-box">
            <div class="confirm-text">${isDel
              ? `Delete <b>${escapeHtml(x.name)}</b> everywhere, past and future?<br>If you only want to stop it going forward, cancel and use "Stop all future ones" instead.`
              : `Stop <b>${escapeHtml(x.name)}</b> after ${fmtDate(toDateStr(new Date()))}?<br>Everything up to today stays in your history.`}
              <br><span style="color:var(--text-soft);">You can take it back with the ↩️ Undo button afterwards.</span>
            </div>
            <div class="row-btns">
              <button class="btn small search-confirm-yes" style="flex:1;${isDel?'background:var(--bad);box-shadow:none;':''}">${isDel?'Yes, delete it':'Yes, stop it'}</button>
              <button class="btn small secondary search-confirm-no" style="flex:1;">Cancel</button>
            </div>
          </div>`;
        }
        return metaRow + `
          <div class="row-btns" style="margin:0 0 12px;flex-wrap:wrap;gap:6px;">
            <button class="btn small secondary search-edit-btn" data-id="${x.id}">✏️ Change name or amount</button>
            ${repeats ? (stopped
                ? `<button class="btn small secondary search-resume-btn" data-id="${x.id}" data-list="${listKey}">↩ Start it up again</button>`
                : `<button class="btn small secondary search-stop-btn" data-id="${x.id}" data-list="${listKey}">🛑 Stop all future ones</button>`) : ''}
            <button class="btn small secondary search-del-btn" data-id="${x.id}" data-list="${listKey}" data-name="${escapeHtml(x.name)}" style="color:var(--bad);border-color:var(--pink-3);">🗑️ Delete it completely</button>
          </div>`;
      }).join('')}
    </div>`;
}

function wireSearchPaid(rows){
  const wrap = document.getElementById('searchResultsWrap');
  if(!wrap) return;
  const tap = wrap.querySelector('.search-paid-tap');
  if(tap) tap.addEventListener('click', ()=>{ searchPaidEditing = true; renderSearchResults(); });
  const cancel = wrap.querySelector('.search-paid-cancel');
  if(cancel) cancel.addEventListener('click', ()=>{ searchPaidEditing = false; renderSearchResults(); });
  const form = wrap.querySelector('.search-paid-form');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const target = parseFloat(new FormData(form).get('paid'));
    if(isNaN(target) || target < 0) return;
    // Work through them oldest first, ticking off as many whole payments as
    // the amount covers. Anything beyond that is marked as not paid yet.
    const ordered = rows.slice().sort((a,b)=> a.date.localeCompare(b.date));
    state.paidMarks = state.paidMarks || {};
    let running = 0;
    ordered.forEach(r=>{
      if(!r.pkey) return;
      if(running + r.amount <= target + 0.001){
        state.paidMarks[r.pkey] = true;
        running += r.amount;
      } else {
        state.paidMarks[r.pkey] = false;
      }
    });
    searchPaidEditing = false;
    await persist();
  });
}

function wireSearchManage(){
  const wrap = document.getElementById('searchResultsWrap');
  if(!wrap) return;
  wrap.querySelectorAll('.search-edit-btn').forEach(b=>{
    b.addEventListener('click', ()=>{ searchEditingItemId = b.dataset.id; renderSearchResults(); });
  });
  wrap.querySelectorAll('.search-edit-cancel').forEach(b=>{
    b.addEventListener('click', ()=>{ searchEditingItemId = null; renderSearchResults(); });
  });
  wrap.querySelectorAll('.search-edit-form').forEach(f=>{
    f.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const fd = new FormData(f);
      const amount = parseFloat(fd.get('amount'));
      if(isNaN(amount)) return;
      const list = f.dataset.list;
      const item = state[list].find(v=>v.id===f.dataset.id);
      if(!item) return;
      const newName = (fd.get('name')||'').trim();
      const from = (fd.get('fromDate')||'').trim();
      if(from && item.frequency !== 'oneoff'){
        // A benefit going up mid-year: stop the old amount the day before the
        // rise, and start a fresh one on the new amount from that date. Past
        // payments keep what they actually were.
        const dayBefore = (()=>{ const d2 = new Date(from+"T00:00:00"); d2.setDate(d2.getDate()-1); return toDateStr(d2); })();
        item.endDate = dayBefore;
        const copy = Object.assign({}, item, { id: uid(), amount, date: from });
        if(newName) copy.name = newName;
        delete copy.endDate;
        state[list].push(copy);
      } else {
        item.amount = amount;
        if(newName) item.name = newName;
      }
      searchEditingItemId = null;
      await persist();
    });
  });
  wrap.querySelectorAll('.search-stop-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      searchConfirm = { id: b.dataset.id, list: b.dataset.list, action: 'stop' };
      renderSearchResults();
    });
  });
  wrap.querySelectorAll('.search-confirm-no').forEach(b=>{
    b.addEventListener('click', ()=>{ searchConfirm = null; renderSearchResults(); });
  });
  wrap.querySelectorAll('.search-confirm-yes').forEach(b=>{
    b.addEventListener('click', async ()=>{
      const c = searchConfirm;
      searchConfirm = null;
      if(!c) return;
      if(c.action === 'del'){
        state[c.list] = state[c.list].filter(v=>v.id!==c.id);
      } else {
        const item = state[c.list].find(v=>v.id===c.id);
        if(item) item.endDate = toDateStr(new Date());
      }
      await persist();
    });
  });
  wrap.querySelectorAll('.search-resume-btn').forEach(b=>{
    b.addEventListener('click', async ()=>{
      const item = state[b.dataset.list].find(v=>v.id===b.dataset.id);
      if(!item) return;
      delete item.endDate;
      await persist();
    });
  });
  wrap.querySelectorAll('.search-del-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      searchConfirm = { id: b.dataset.id, list: b.dataset.list, action: 'del' };
      renderSearchResults();
    });
  });
}

function renderSearchResults(){
  const wrap = document.getElementById('searchResultsWrap');
  if(!wrap) return;
  const q = searchQuery.trim();
  if(!q){
    wrap.innerHTML = `<div class="card"><div class="empty">Start typing to search across your income, outgoings and trips 🌸</div></div>`;
    return;
  }
  const results = performSearch(q);
  const today = new Date(); today.setHours(0,0,0,0);
  results.sort((a,b)=> new Date(a.date+"T00:00:00") - new Date(b.date+"T00:00:00"));

  // Day-plan notes are plans, not payments, so they stay out of the headline
  // totals — otherwise the same £500 gets counted twice and the total lies.
  const counted = results.filter(r=> r.kind === 'expense' && r.group !== 'day-plan');
  const totalAll = counted.reduce((s,r)=>s+r.amount,0);
  const paid = counted.filter(r=> isPaidEntry(r.pkey, r.date)).reduce((s,r)=>s+r.amount,0);
  const upcoming = totalAll - paid;

  const rowHtml = (r)=>{
    const isPast = r.kind === 'income'
      ? (new Date(r.date+"T00:00:00") <= today)
      : isPaidEntry(r.pkey, r.date);
    // Show which income this money comes out of, so every line says where it's
    // from instead of only the ones where that was typed into the label.
    const src = r.kind === 'income' ? '' : sourceLabelFor(r.akey, r.date);
    const meta = [r.trip, src ? 'from ' + src : ''].filter(Boolean).join(' · ');
    return `
      <div class="cal-line">
        <span class="cname">${escapeHtml(r.name)}${isPast?' <span class="pill">paid</span>':''}
          ${meta?`<span class="mdate">${escapeHtml(meta)}</span>`:''}
        </span>
        <span style="display:flex;align-items:center;gap:6px;">
          <span class="search-date">${fmtDate(r.date)}</span>
          <span class="camt ${r.kind}">${r.kind==='income'?'+':'−'}${fmt(r.amount)}</span>
        </span>
      </div>`;
  };

  const sectionsHtml = SEARCH_GROUPS.map(g=>{
    const rows = results.filter(r=>r.group===g.key);
    if(!rows.length) return '';
    const sub = rows.reduce((s,r)=>s+r.amount,0);
    // Break the list up by month, the same way the Income and Outgoings
    // lists do, so a long run of results stays readable.
    let lastMonth = null;
    const listHtml = rows.map(r=>{
      const mk = (r.date||'').slice(0,7);
      let head = '';
      if(mk && mk !== lastMonth){
        lastMonth = mk;
        const d = new Date(r.date+"T00:00:00");
        const mRows = rows.filter(x=>(x.date||'').slice(0,7) === mk);
        const mSub = mRows.reduce((t,x)=>t+x.amount,0);
        head = `<div class="cal-month" style="display:flex;align-items:center;gap:6px;margin-top:12px;">
          ${d.toLocaleDateString('en-GB', {month:'long', year:'numeric'})}
          <span class="pill" style="margin-left:auto;text-transform:none;letter-spacing:0;">${mRows.length} · ${fmt(mSub)}</span>
        </div>`;
      }
      return head + rowHtml(r);
    }).join('');
    return `
      <div class="subhead" style="margin-top:14px;">${g.label}
        <span class="pill" style="margin-left:auto;">${rows.length} · ${fmt(sub)}</span>
      </div>
      ${listHtml}
      ${g.note?`<div class="disclaimer">${g.note}</div>`:''}`;
  }).join('');

  wrap.innerHTML = `
    ${searchManageHtml(q)}
    <div class="card">
      ${counted.length ? `
      <div class="trip-summary" style="margin-bottom:4px;">
        ${searchPaidEditing ? `
        <form class="miniform search-paid-form" style="flex:1 0 100%;">
          <span style="flex:1 0 100%;font-size:0.78rem;color:var(--text-soft);">How much of these payments have already gone out? The earliest ones get ticked off until that's covered.</span>
          <input type="number" name="paid" value="${paid.toFixed(2)}" step="0.01" min="0" required style="flex:2;">
          <button type="submit" class="btn small">Save</button>
          <button type="button" class="btn small secondary search-paid-cancel">Cancel</button>
        </form>` : `
        <div class="mini-stat search-paid-tap" style="cursor:pointer;">
          Already paid<b>${fmt(paid)}</b>
          <div style="font-size:0.62rem;color:var(--pink-4);margin-top:2px;">tap to set</div>
        </div>`}
        <div class="mini-stat">Still to come<b>${fmt(upcoming)}</b></div>
        <div class="mini-stat">Total payments<b>${fmt(totalAll)}</b></div>
      </div>
      <div class="disclaimer" style="text-align:center;margin-top:2px;">
        This adds up the payments in your budget with "${escapeHtml(q)}" in the name.
        It isn't what anything costs — for a holiday's balance, look at your Trips tab.
      </div>` : ''}
      ${results.length ? sectionsHtml : `<div class="empty">No matches for "${escapeHtml(q)}"</div>`}
    </div>
  `;
  wireSearchManage();
  wireSearchPaid(counted);
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ---------- Screenshot -> income flow ---------- */
function setupScreenshotUI(){
  const zone = document.getElementById('shotZone');
  const input = document.getElementById('shotInput');
  const status = document.getElementById('shotStatus');
  const preview = document.getElementById('shotPreview');
  const confirmWrap = document.getElementById('shotConfirm');
  if(!zone) return;

  zone.addEventListener('click', ()=> input.click());

  input.addEventListener('change', async ()=>{
    const file = input.files[0];
    if(!file) return;
    preview.src = URL.createObjectURL(file);
    preview.classList.remove('hidden');
    status.classList.remove('hidden');
    confirmWrap.classList.add('hidden');
    status.textContent = "Reading your screenshot... 🌸";

    if(!CAP.sample){
      status.textContent = "Couldn't read it automatically here — just fill the amount in below.";
      confirmWrap.classList.remove('hidden');
      document.getElementById('shotDesc').value = "";
      document.getElementById('shotAmt').value = "";
      return;
    }
    try{
      const limits = await CAP.sample.limits().catch(()=>null);
      if(!limits?.images){
        status.textContent = "Screenshot reading isn't available here — just fill it in below.";
        confirmWrap.classList.remove('hidden');
        return;
      }
      const result = await CAP.sample.json(
        "This image is a screenshot of a payment or income notification (a bank text, an app notification, a benefit payment screen, etc). "+
        "Extract the payment amount in GBP and a short label for what it is (e.g. the sender name or benefit name). "+
        "Reply with ONLY JSON in this exact shape: {\"amount\": number_or_null, \"description\": string}. "+
        "If you cannot confidently find an amount, set amount to null and description to your best guess or an empty string.",
        { images: file, modelTier: "quick" }
      );
      status.textContent = "Got it! Check the details below before adding 🩷";
      confirmWrap.classList.remove('hidden');
      document.getElementById('shotDesc').value = result?.description || "";
      document.getElementById('shotAmt').value = (result?.amount!=null && !isNaN(result.amount)) ? result.amount : "";
    }catch(err){
      console.warn('sample failed', err);
      let msg = "Couldn't read that automatically — just fill it in below.";
      if(err?.code === 'not_granted') msg = "No worries — just fill in the amount below instead.";
      status.textContent = msg;
      confirmWrap.classList.remove('hidden');
    }
  });

  const shotForm = document.getElementById('shotForm');
  shotForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const desc = document.getElementById('shotDesc').value.trim();
    const amt = parseFloat(document.getElementById('shotAmt').value);
    const freq = document.getElementById('shotFreq').value;
    if(!desc || isNaN(amt)) return;
    state.incomes.push({ id: uid(), name: desc, amount: amt, frequency: freq });
    await persist();
    // reset screenshot panel
    input.value = "";
    preview.classList.add('hidden');
    status.classList.add('hidden');
    confirmWrap.classList.add('hidden');
    document.querySelector('nav.tabs button[data-tab="income"]').click();
  });
}

/* ---------- Undo ---------- */
const undoBtnEl = document.getElementById('undoBtn');
if(undoBtnEl){
  undoBtnEl.addEventListener('click', async ()=>{ await undoLast(); });
}
const undoDismissEl = document.getElementById('undoDismiss');
if(undoDismissEl){
  undoDismissEl.addEventListener('click', ()=>{ undoBarDismissed = true; renderUndoBar(); });
}

/* ---------- PWA install ---------- */
let deferredInstallEvent = null;
const installBtn = document.getElementById('installBtn');
const installHelp = document.getElementById('installHelp');
const closeInstallHelp = document.getElementById('closeInstallHelp');
let isStandalone = false;
try{
  isStandalone = (typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
}catch(e){ isStandalone = false; }

if(!isStandalone && installBtn){
  installBtn.style.display = 'inline-block';
}
window.addEventListener('beforeinstallprompt', (e)=>{
  e.preventDefault();
  deferredInstallEvent = e;
  if(installBtn) installBtn.style.display = 'inline-block';
});
if(installBtn){
  installBtn.addEventListener('click', async ()=>{
    if(deferredInstallEvent){
      deferredInstallEvent.prompt();
      const choice = await deferredInstallEvent.userChoice.catch(()=>null);
      deferredInstallEvent = null;
    } else {
      installHelp.classList.remove('hidden');
    }
  });
}
if(closeInstallHelp){
  closeInstallHelp.addEventListener('click', ()=> installHelp.classList.add('hidden'));
}
if('serviceWorker' in navigator){
  try{
    navigator.serviceWorker.register('sw.js').catch(()=>{});
  }catch(e){}
}

init();
</script>
</body>
</html>

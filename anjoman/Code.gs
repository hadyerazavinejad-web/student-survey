// Paste the ID from the Google Sheets URL between /d/ and /edit.
const SPREADSHEET_ID = "";
const TAB_NAME = "پاسخ‌های انجمن";
const QUESTIONS = [
  {
    "stage": 0,
    "title": "رشته‌ی تحصیلی شما چیست؟",
    "limit": 100,
    "required": true,
    "placeholder": "مثلاً مهندسی کامپیوتر، برق یا حسابداری",
    "hint": ""
  },
  {
    "stage": 0,
    "title": "ورودی چه سالی هستید؟",
    "options": [
      "۱۴۰۵",
      "۱۴۰۴",
      "۱۴۰۳",
      "۱۴۰۲",
      "۱۴۰۱ و قبل‌تر"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 0,
    "title": "پیش از دیدن این فرم، چقدر با انجمن علمی مهندسی کامپیوتر آشنا بودید؟",
    "options": [
      "انجمن رو نمی‌شناختم",
      "اسمش رو شنیده بودم",
      "فعالیت‌هاش رو دنبال می‌کنم",
      "قبلاً در یکی از برنامه‌ها شرکت کردم یا همکاری داشتم"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 0,
    "title": "از چه طریقی با این پرسشنامه آشنا شدید؟",
    "options": [
      "گروه یا کانال انجمن",
      "گروه کلاسی یا دانشگاهی",
      "دوست یا هم‌کلاسی",
      "استاد یا مسئول دانشگاه",
      "صفحه‌ی شبکه‌های اجتماعی",
      "سایر"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 0,
    "title": "الان برای یادگیری یا پیشرفت تحصیلی، بیشتر به چه کمکی نیاز دارید؟",
    "options": [
      "شناخت شاخه‌های کامپیوتر و انتخاب مسیر",
      "یادگیری مبانی برنامه‌نویسی",
      "فهم درس‌های دانشگاه",
      "شروع یا تکمیل یک پروژه",
      "پیدا کردن هم‌تیمی",
      "آمادگی برای کارآموزی و بازار کار",
      "فعلاً نیاز مشخصی ندارم",
      "سایر"
    ],
    "max": 2,
    "exclusive": [
      6
    ]
  },
  {
    "stage": 0,
    "title": "دوست دارید اولین برنامه‌ی انجمن چه باشد؟",
    "options": [
      "کارگاه عملی",
      "جلسه‌ی رفع اشکال درسی",
      "گفت‌وگو با یک متخصص یا فارغ‌التحصیل",
      "پروژه‌ی تیمی کوتاه",
      "مسابقه یا چالش",
      "بازدید از یک شرکت یا محیط کاری",
      "سایر"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 0,
    "title": "دوست داری انجمن روی کدوم حوزه‌ها بیشتر برنامه بذاره؟",
    "options": [
      "توسعه‌ی وب",
      "هوش مصنوعی و تحلیل داده",
      "شبکه و امنیت",
      "طراحی رابط و تجربه‌ی کاربری",
      "برنامه‌نویسی موبایل",
      "بازی‌سازی",
      "سخت‌افزار و اینترنت اشیا",
      "هنوز حوزه‌ام رو انتخاب نکردم",
      "سایر"
    ],
    "max": 3,
    "exclusive": [
      7
    ]
  },
  {
    "stage": 1,
    "title": "اگر همین ترم بخواهید در یک کارگاه شرکت کنید، کدام موضوع برایتان کاربردی‌تر است؟",
    "options": [
      "شروع برنامه‌نویسی با تمرین",
      "Git و GitHub برای کار تیمی",
      "ساخت اولین سایت",
      "ساخت یک پروژه‌ی ساده با پایتون",
      "استفاده‌ی کاربردی از هوش مصنوعی در درس و پروژه",
      "رزومه و آمادگی برای کارآموزی",
      "سایر"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 1,
    "title": "برنامه‌ها بهتره از چه سطحی شروع بشن تا بتونی همراهشون پیش بری؟",
    "options": [
      "از صفر و بدون پیش‌نیاز",
      "مقدماتی همراه تمرین",
      "پروژه‌محور برای کسی که مبانی رو بلده",
      "تخصصی‌تر برای کسی که تجربه‌ی پروژه داره",
      "بسته به موضوع فرق می‌کنه"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 1,
    "title": "کدوم شیوه‌ی برگزاری برات مناسب‌تره؟",
    "options": [
      "حضوری در دانشگاه",
      "آنلاین زنده",
      "ویدیوی ضبط‌شده",
      "حضوری همراه با دسترسی به فایل یا ضبط جلسه",
      "فرقی نداره"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 1,
    "title": "چه زمانی معمولاً امکان شرکت داری؟",
    "options": [
      "وسط هفته صبح",
      "وسط هفته ظهر",
      "وسط هفته عصر",
      "پنج‌شنبه",
      "جمعه",
      "زمان ثابتی ندارم"
    ],
    "max": 2,
    "exclusive": [
      5
    ]
  },
  {
    "stage": 1,
    "title": "چه چیزی بیشتر ممکنه باعث بشه در یک برنامه شرکت نکنی؟",
    "options": [
      "تداخل با کلاس یا کار",
      "اطلاع‌رسانی دیرهنگام",
      "هزینه",
      "سختی رفت‌وآمد",
      "مشخص نبودن سطح یا پیش‌نیاز",
      "معلوم نبودن اینکه آخر برنامه چی یاد می‌گیرم",
      "طولانی بودن برنامه",
      "سایر"
    ],
    "max": 2,
    "exclusive": []
  },
  {
    "stage": 1,
    "title": "اگر انجمن یک برنامه‌ی مشترک برای دانشجوهای رشته‌های مختلف برگزار کند، کدام موضوع را ترجیح می‌دهید؟",
    "options": [
      "ابزارهای هوش مصنوعی برای درس و پروژه",
      "مهارت‌های دیجیتال کاربردی در رشته‌های مختلف",
      "رزومه و آمادگی برای کارآموزی",
      "آشنایی با پروژه‌های مشترک بین رشته‌ها",
      "مسابقه یا چالش تیمی",
      "فعلاً تمایلی ندارم",
      "سایر"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 2,
    "title": "کدام محتوا باعث می‌شود صفحه یا کانال انجمن را دنبال کنید؟",
    "options": [
      "اطلاع‌رسانی رویدادها",
      "معرفی منابع و مسیرهای یادگیری",
      "آموزش کوتاه و کاربردی",
      "فرصت‌های کارآموزی و مسابقه",
      "معرفی پروژه‌های دانشجویی",
      "گفت‌وگو با دانشجوها و فارغ‌التحصیل‌ها",
      "سایر"
    ],
    "max": 2,
    "exclusive": []
  },
  {
    "stage": 2,
    "title": "دوست دارید خبر برنامه‌های انجمن از چه طریقی به شما برسد؟",
    "options": [
      "تلگرام",
      "بله",
      "اینستاگرام",
      "گروه‌های کلاسی یا دانشگاهی",
      "اطلاع‌رسانی حضوری یا پوستر دانشگاه",
      "سایر"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 2,
    "title": "اگر انجمن پادکست منتشر کند، چقدر احتمال دارد یک قسمت را گوش بدهید؟",
    "options": [
      "احتمالاً گوش می‌دم",
      "اگه موضوعش برام جذاب باشه گوش می‌دم",
      "معمولاً پادکست گوش نمی‌دم"
    ],
    "max": 1,
    "exclusive": []
  },
  {
    "stage": 2,
    "title": "کدوم موضوع باعث می‌شه قسمت اول پادکست رو باز کنی؟",
    "options": [
      "چطور شاخه‌ی مناسب خودم رو پیدا کنم؟",
      "چطور اولین پروژه‌ام رو شروع کنم؟",
      "چطور برای اولین کارآموزی آماده بشم؟",
      "یک روز کاری واقعی در یکی از شغل‌های کامپیوتر چطوره؟",
      "تجربه‌ی اولین پروژه‌ی تیمی از زبان بچه‌های دانشگاه",
      "چطور از هوش مصنوعی موقع یادگیری استفاده کنیم؟",
      "سایر"
    ],
    "max": 2,
    "exclusive": [],
    "podcast": true
  },
  {
    "stage": 2,
    "title": "برای یک قسمت معمولی پادکست، چه مدتی رو ترجیح می‌دی؟",
    "options": [
      "زیر ۵ دقیقه",
      "۵ تا ۱۰ دقیقه",
      "۱۱ تا ۲۰ دقیقه",
      "۲۱ تا ۳۰ دقیقه",
      "بیشتر از ۳۰ دقیقه",
      "بستگی به موضوع داره"
    ],
    "max": 1,
    "exclusive": [],
    "podcast": true
  },
  {
    "stage": 2,
    "title": "پادکست با چه قالبی برات جذاب‌تره؟",
    "options": [
      "توضیح کوتاه توسط یک نفر",
      "گفت‌وگو با یک دانشجو و شنیدن تجربه‌ی واقعی",
      "مصاحبه با متخصص یا فارغ‌التحصیل",
      "پاسخ به سؤال‌های بچه‌ها",
      "میزگرد چندنفره",
      "فرقی نداره"
    ],
    "max": 1,
    "exclusive": [],
    "podcast": true
  },
  {
    "stage": 3,
    "title": "اگر پیشنهادی برای برنامه‌های انجمن دارید، بنویسید.",
    "limit": 1000,
    "multiline": true
  },
  {
    "stage": 3,
    "title": "اگه دوست داری با انجمن همکاری کنی، به کدوم کارها علاقه داری؟",
    "options": [
      "تولید محتوا یا پادکست",
      "طراحی گرافیک یا تدوین",
      "برنامه‌نویسی و پروژه‌های فنی",
      "آموزش و آماده‌سازی منابع",
      "پژوهش و مصاحبه",
      "هماهنگی و اجرای رویدادها",
      "هنوز نمی‌دونم",
      "فعلاً قصد همکاری ندارم"
    ],
    "max": 2,
    "exclusive": [
      6,
      7
    ]
  },
  {
    "stage": 3,
    "title": "نام و نام‌خانوادگی شما چیست؟",
    "limit": 120,
    "required": false,
    "placeholder": "نام و نام‌خانوادگی",
    "hint": ""
  },
  {
    "stage": 3,
    "title": "راه ارتباطی شما چیست؟",
    "limit": 120,
    "required": false,
    "placeholder": "مثلاً تلگرام @student یا بله @student یا شماره موبایل",
    "hint": "اختیاری · فقط یکی از این موارد را بنویسید: آیدی تلگرام، آیدی بله یا شماره تماس. این اطلاعات برای هماهنگی و اطلاع‌رسانی انجمن استفاده می‌شود."
  }
];

function doGet() {
  return receipt_("سرویس ثبت پاسخ آماده است", "برای پاسخ‌دادن، پرسشنامه را از لینک انجمن باز کنید.");
}

function doPost(event) {
  const params = event && event.parameters;
  if (!params || event.contentLength > 24000 || (params.website || []).some(Boolean)) {
    return receipt_("پاسخ ثبت نشد", "به پرسشنامه برگردید و دوباره تلاش کنید.");
  }

  const ids = params.response_id || [];
  if (ids.length !== 1 || !/^r[a-f0-9]{32}$/.test(ids[0])) {
    return receipt_("پاسخ ثبت نشد", "پرسشنامه را از لینک انجمن باز کنید و دوباره تلاش کنید.");
  }

  let fields;
  try {
    fields = readAnswers_(params);
  } catch (error) {
    return receipt_("پاسخ ثبت نشد", "به پرسشنامه برگردید و پاسخ‌های لازم را کامل کنید.");
  }

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const workbook = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = workbook.getSheetByName(TAB_NAME) || workbook.insertSheet(TAB_NAME);
    const headers = ["زمان ثبت", "شناسه پاسخ"];
    QUESTIONS.forEach((question, index) => {
      headers.push((index + 1) + ". " + question.title);
      if (question.options && question.options.includes("سایر")) {
        headers.push((index + 1) + ". توضیح گزینه سایر");
      }
    });
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
    } else if (sheet.getLastColumn() !== headers.length || sheet.getRange(1, 2).getValue() !== headers[1]) {
      throw new Error("Unexpected response sheet headers.");
    }
    const dataRows = sheet.getLastRow() - 1;
    const duplicate = dataRows > 0 && sheet.getRange(2, 2, dataRows, 1)
      .createTextFinder(ids[0])
      .matchEntireCell(true)
      .findNext();
    if (!duplicate) {
      sheet.appendRow([new Date(), ids[0], ...fields]);
      SpreadsheetApp.flush();
    }
    return receipt_(
      "با افتخار، پاسخ شما ثبت شد!",
      "از اینکه برای آینده‌ی انجمن وقت گذاشتی، ممنونیم. نظر تو کمک می‌کنه کارگاه‌ها و برنامه‌هایی برگزار کنیم که به نیاز و علاقه‌ی دانشجوها نزدیک‌تر باشن.",
      true
    );
  } catch (error) {
    console.error(error.message);
    return receipt_("ثبت پاسخ انجام نشد", "به پرسشنامه برگردید و دوباره ارسال کنید.");
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function readAnswers_(params) {
  const fields = [];
  const skipPodcast = (params.q16 || [])[0] === "2";
  QUESTIONS.forEach((question, index) => {
    const name = "q" + (index + 1);
    const values = params[name] || [];
    if (!question.options) {
      fields.push(textAnswer_(values, question.limit, question.required));
      return;
    }

    const hasOther = question.options.includes("سایر");
    if (skipPodcast && question.podcast) {
      fields.push("");
      if (hasOther) fields.push("");
      return;
    }

    const selected = values.map(value => Number(value));
    if (
      !selected.length || selected.length > question.max ||
      new Set(selected).size !== selected.length ||
      selected.some((value, position) =>
        String(value) !== values[position] || !Number.isInteger(value) ||
        value < 0 || value >= question.options.length
      ) ||
      (selected.length > 1 && selected.some(value => question.exclusive.includes(value)))
    ) {
      throw new Error("Invalid selection in " + name);
    }
    const labels = selected.map(value => question.options[value]);
    fields.push(labels.join("\n"));
    if (hasOther) {
      fields.push(labels.includes("سایر") ? textAnswer_(params[name + "_other"] || [], 180) : "");
    }
  });
  return fields;
}

function textAnswer_(values, limit, required) {
  const value = (values[0] || "").trim();
  if (values.length > 1 || value.length > limit || (required && !value)) throw new Error("Invalid text answer.");
  // Keep text supplied by respondents from being interpreted as a sheet formula.
  return /^[=+@'-]/.test(value) || /^\p{Nd}+$/u.test(value) ? "'" + value : value;
}

function receipt_(title, message, saved) {
  const follow = saved
    ? '<p class="follow">اگر دوست داری خبر برنامه‌های بعدی رو بگیری، خوشحال می‌شیم در کانال تلگرام انجمن همراه‌مون باشی.</p>' +
      '<a href="https://t.me/ceiau" target="_blank" rel="noopener noreferrer">رفتن به کانال انجمن علمی</a>'
    : '';

  return HtmlService.createHtmlOutput(
    '<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8">' +
    '<style>body{margin:0;background:#eef3fa;color:#17253c;font:16px/1.9 Tahoma,Arial,sans-serif}' +
    'main{max-width:560px;margin:12vh auto 0;padding:28px;background:#fff;border:1px solid #d7e0ee;border-radius:18px}' +
    'h1{font-size:1.55rem;margin:0 0 6px;color:#142850}p{margin:0}.follow{margin-top:16px}a{display:inline-block;margin-top:12px;padding:8px 16px;background:#142850;color:#fff;border-radius:10px;text-decoration:none}a:focus-visible{outline:3px solid #3672ec;outline-offset:3px}@media(max-width:620px){main{margin:8vh 14px 0}}</style>' +
    '</head><body><main><h1>' + title + '</h1><p>' + message + '</p>' + follow + '</main></body></html>'
  ).setTitle(title).addMetaTag("viewport", "width=device-width, initial-scale=1");
}

// Run once in Apps Script to create the private response and statistics tabs.
function setupSurvey() {
  const workbook = SpreadsheetApp.openById(SPREADSHEET_ID);
  const responses = workbook.getSheetByName(TAB_NAME) || workbook.insertSheet(TAB_NAME);
  const headers = ["زمان ثبت", "شناسه پاسخ"];
  const columns = [];
  for (const [index, question] of QUESTIONS.entries()) {
    columns.push(columnLetter_(headers.length + 1));
    headers.push((index + 1) + ". " + question.title);
    if (question.options && question.options.includes("سایر")) {
      headers.push((index + 1) + ". توضیح گزینه سایر");
    }
  }
  if (!responses.getLastRow()) {
    responses.appendRow(headers);
    responses.setFrozenRows(1);
  }
  responses.setRightToLeft(true);

  // Leave existing report tabs intact if this setup is run again.
  if (!workbook.getSheetByName("آمار انجمن")) {
    const report = workbook.insertSheet("آمار انجمن");
    const raw = "'" + TAB_NAME + "'!";
    const rows = [
      ["تعداد پاسخ‌های ثبت‌شده", "", "=COUNTA(" + raw + "B2:B)", "", ""],
      ["درصدها بر اساس تعداد پاسخ‌دهندگان همان سؤال‌اند. برای سؤال‌های چندانتخابی، جمع درصدها می‌تواند بیشتر از ۱۰۰٪ باشد.", "", "", "", ""],
      ["سؤال", "گزینه", "تعداد انتخاب", "تعداد پاسخ‌دهنده", "درصد انتخاب"]
    ];
    for (const [index, question] of QUESTIONS.entries()) {
      if (!question.options) continue;
      const col = columns[index];
      const range = raw + col + "2:" + col;
      const answered = '=COUNTIF(' + range + ',"<>")';
      for (const option of question.options) {
        const row = rows.length + 1;
        const literal = 'B' + row;
        const pattern = 'SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(' + literal + ',"~","~~"),"*","~*"),"?","~?")';
        const line = 'CHAR(10)';
        const counts = ['COUNTIF(' + range + ',"="&' + pattern + ')'];
        if (question.max > 1) {
          counts.push(
            'COUNTIF(' + range + ',' + pattern + '&' + line + '&"*")',
            'COUNTIF(' + range + ',"*"&' + line + '&' + pattern + ')',
            'COUNTIF(' + range + ',"*"&' + line + '&' + pattern + '&' + line + '&"*")'
          );
        }
        rows.push([(index + 1) + ". " + question.title, option, "=" + counts.join("+"), answered,
          '=IF(D' + row + '=0,"",C' + row + '/D' + row + ')']);
      }
    }
    report.setRightToLeft(true);
    report.getRange(1, 1, rows.length, 5).setValues(rows).setWrap(true);
    report.getRange("A2:E2").merge();
    report.getRange("A3:E3").setBackground("#142850").setFontColor("#ffffff").setFontWeight("bold");
    report.getRange(4, 5, rows.length - 3, 1).setNumberFormat("0.0%");
    report.setColumnWidth(1, 320);
    report.setColumnWidth(2, 290);
    report.setColumnWidths(3, 3, 110);
    report.setFrozenRows(3);
    report.getRange(3, 1, rows.length - 2, 5).createFilter();
  }

  if (!workbook.getSheetByName("آمار رشته‌ها")) {
    const majors = workbook.insertSheet("آمار رشته‌ها");
    const majorCol = columns[0];
    majors.setRightToLeft(true);
    const query = "select " + majorCol + ", count(" + majorCol + ") where " + majorCol +
      " is not null group by " + majorCol + " order by count(" + majorCol +
      ") desc label " + majorCol + " 'رشته تحصیلی', count(" + majorCol + ") 'تعداد پاسخ'";
    const source = "'" + TAB_NAME + "'!" + majorCol + "2:" + majorCol;
    majors.getRange("A1").setFormula(
      '=IFERROR(QUERY(' + source + ',"' + query + '",0),"هنوز پاسخی ثبت نشده است")'
    );
    majors.setColumnWidths(1, 2, 210);
    majors.getRange("A1:B1").setBackground("#142850").setFontColor("#ffffff").setFontWeight("bold");
    majors.setFrozenRows(1);
  }
}

function columnLetter_(number) {
  let result = "";
  while (number > 0) {
    number--;
    result = String.fromCharCode(65 + number % 26) + result;
    number = Math.floor(number / 26);
  }
  return result;
}

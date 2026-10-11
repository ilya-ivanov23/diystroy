# 📊 Подключение вашей Google Таблицы к сайту ДиАйСтрой

Ваша таблица:  
`https://docs.google.com/spreadsheets/d/1TqLG5UZj_6j8Ny3PV4QJ-n6TRNRN0eSjluMcGwzIc7c/edit`

Структура колонок:  
**`ID` | `Имя/Компания` | `Телефон` | `Email` | `Link` | `File` | `Комментарий`**

---

## ⚡ Универсальный код для Apps Script (работает и по прямой ссылке, и из меню):

Так как вы зашли напрямую через `script.google.com`, в коде **жестко прописан ID вашей таблицы** (`1TqLG5UZj_6j8Ny3PV4QJ-n6TRNRN0eSjluMcGwzIc7c`), поэтому скрипт гарантированно знает, в какую именно таблицу писать!

### Код для вставки в Apps Script:

```javascript
// ID вашей таблицы из ссылки:
var SHEET_ID = "1TqLG5UZj_6j8Ny3PV4QJ-n6TRNRN0eSjluMcGwzIc7c";

function doPost(e) {
  try {
    // Подключаемся напрямую к вашей таблице по ID
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Если клиент прикрепил файл — сохраняем его на ваш Google Диск
    var fileLink = data.file || "";
    if (data.fileBase64 && data.fileName) {
      try {
        var decoded = Utilities.base64Decode(data.fileBase64);
        var blob = Utilities.newBlob(decoded, data.mimeType || "application/octet-stream", data.fileName);
        var driveFile = DriveApp.createFile(blob);
        driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        fileLink = driveFile.getUrl();
      } catch (err) {
        fileLink = data.file || data.fileName || "";
      }
    }

    // Запись строго по вашим 7 колонкам:
    // 1: ID
    // 2: Имя/Компания
    // 3: Телефон
    // 4: Email
    // 5: Link (ссылка на сторонний диск)
    // 6: File (ссылка на файл)
    // 7: Комментарий
    sheet.appendRow([
      data.id || "",
      data.name || "",
      data.phone || "",
      data.email || "",
      data.link || "",
      fileLink,
      data.message || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Функция для быстрой проверки (можно нажать "Выполнить", чтобы проверить запись строки):
function test() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getActiveSheet();
  sheet.appendRow([
    "ДИ-ТЕСТ", 
    "Тестовая компания", 
    "+7 (999) 000-00-00", 
    "test@prom.ru", 
    "https://disk.yandex.ru/test", 
    "https://example.com/file.pdf", 
    "Тестовая проверка связи"
  ]);
  Logger.log("Строка успешно добавлена в таблицу!");
}
```

---

## 🚀 Пошагово: как развернуть веб-приложение

1. Вставьте код выше в ваш проект в Apps Script.
2. *(По желанию)* Можете выбрать функцию `test` вверху и нажать **Выполнить** (Run) — Google запросит разрешение, и в вашей таблице появится тестовая строка.
3. В правом верхнем углу нажмите синюю кнопку **Начать развертывание** (Deploy) ➔ **Новое развертывание** (New deployment).
4. Нажмите на значок шестеренки ⚙️ слева ➔ выберите **Веб-приложение** (Web app).
5. Заполните настройки:
   * **Описание:** `ДиАйСтрой Webhook`
   * **Запуск от имени (Execute as):** `Я (ваш email)`
   * **У кого есть доступ (Who has access):** `Все` (Anyone)  *(Обязательно выберите «Все»!)*
6. Нажмите **Развернуть** (Deploy).
7. Скопируйте **URL веб-приложения** (вида `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🔗 Подключение к сайту:
Вставьте полученный URL в файл `.env.local` в корне проекта:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/ВАШ_СКОПИРОВАННЫЙ_URL/exec
```

Всё! Теперь сайт через этот URL автоматически добавляет каждую заявку с сайта прямо в вашу Google Таблицу по колонкам.

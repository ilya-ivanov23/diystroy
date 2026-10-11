# 📊 Подключение вашей Google Таблицы к сайту ДиАйСтрой

Ваша таблица:  
`https://docs.google.com/spreadsheets/d/1TqLG5UZj_6j8Ny3PV4QJ-n6TRNRN0eSjluMcGwzIc7c/edit`

Структура колонок:  
**`ID` | `Имя/Компания` | `Телефон` | `Email` | `Link` | `File` | `Комментарий`**

---

## ⚡ Инструкция за 1 минуту (бесплатно, без сторонних сервисов):

### Шаг 1. Откройте Apps Script в вашей таблице
1. Откройте вашу Google Таблицу по ссылке выше.
2. В верхнем меню нажмите **Расширения** (Extensions) ➔ **Apps Script**.
3. Удалите весь существующий код в окне редактора и вставьте код ниже:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Если клиент прикрепил файл — сохраняем его в ваш Google Диск
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

    // Запись точно по вашим колонкам:
    // 1: ID
    // 2: Имя/Компания
    // 3: Телефон
    // 4: Email
    // 5: Link (ссылка на сторонний диск)
    // 6: File (ссылка на файл на Google Диске)
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
```

---

### Шаг 2. Разверните веб-приложение
1. В правом верхнем углу окна Apps Script нажмите синюю кнопку **Начать развертывание** (Deploy) ➔ **Новое развертывание** (New deployment).
2. Нажмите на значок шестеренки слева ➔ выберите **Веб-приложение** (Web app).
3. Заполните настройки:
   * **Описание:** `ДиАйСтрой Заявки`
   * **Запуск от имени (Execute as):** `Я (ваш email)`
   * **У кого есть доступ (Who has access):** `Все` (Anyone)  *(Важно: именно «Все», чтобы сайт мог отправлять данные)*.
4. Нажмите **Развернуть** (Deploy) и подтвердите разрешения от Google.
5. Скопируйте полученный **URL веб-приложения** (он выглядит так: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Шаг 3. Добавьте URL в проект сайта
В корне проекта создайте или отредактируйте файл `.env.local` и укажите полученную ссылку:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/ВАШ_СКРИПТ/exec
```

Готово! Теперь при отправке любой заявки с сайта:
* Генерируется уникальный номер заявки (например, **`ДИ-1001`**, **`ДИ-1002`**).
* Клиент видит номер заявки на экране.
* Все 7 колонок мгновенно заполняются в вашей Google Таблице.
* Если прикреплен файл (PDF/чертеж/смета), он автоматически сохраняется в Google Диск, а в колонку `File` вставляется кликабельная ссылка.
* Также ведется локальный резервный лог в `leads.json`.

-- 陳情表單新增「想陳情給哪位議員」欄位
-- 資料庫已經建立過 petitions 資料表的話，執行這段來補上新欄位即可。

alter table petitions add column if not exists target_member text;

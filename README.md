

## Node.js sample app on OpenShift!
-----------------

Регестрация https://www.openshift.com/pricing/index.html

Создать проект.
Выбрать продукт node js и приступить к настройке
В пункте конфигурация выбрать версию node 6
В разделе git указать линк на свой репозитарий. Завершить настройку

Затем открыть проект
Перейти в пункт Builds > Builds
Открыть проект и в правом углу открыть настройку
В Show advanced options найти раздел Triggers выбрать Webhook зависит каким гит репозитарием пользуетесь такой и добавляем
Копировать линк git Webhook

Переходим к настройке репозитария

В моем случаии это  GitHub Webhooks

В репозитарии нужно открыть настройки и найти раздел Webhooks
Добавить новый Webhooks
В Payload URL вставляем скопированую лику с сервера
В Content type указываем application/json
В Which events would you like to trigger this webhook? выбираем Send me everything.
И добавляем
При создании должен быть индикатор что Webhooks успешно приконекчен.

Затем возвращаемся в console openshift и приходим в раздел Overview
В правом углу напротив названия проекта будет меню запускаем билд и ждем когда завершиться билд и затем переходим по предлагаемой ссылке


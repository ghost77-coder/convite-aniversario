@echo offchcp 65001 >nul
echo ========================================
echo   AUTOMACAO GIT - SITE DE ANIVERSARIO
echo ========================================
echo.
set /p "msg=Digite o que voce alterou nesta atualizacao: "
echo.
echo Adicionando arquivos...
git add .
echo Salvando com a mensagem: "%msg%"
git commit -m "%msg%"
echo Enviando para o GitHub...
git push origin main
echo.
echo ========================================
echo   TUDO PRONTO E ENVIADO COM SUCESSO!
echo ========================================
pause

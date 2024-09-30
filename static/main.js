function createWallet() {
    fetch('https://tgapp1.onrender.com/api/create-wallet', {  
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log(data); // 调试日志
        if (data.address && data.mnemonic) {
            // 隐藏主菜单，显示钱包信息
            document.getElementById('mainMenu').style.display = 'none';
            document.getElementById('walletInfo').style.display = 'block';
            document.getElementById('walletAddress').textContent = data.address;
            document.getElementById('walletMnemonic').textContent = data.mnemonic;
        } else {
            alert('创建钱包失败，请重试！');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('创建钱包失败，请检查网络连接！');
    });
}

function goBack() {
    // 隐藏钱包信息，显示主菜单
    document.getElementById('walletInfo').style.display = 'none';
    document.getElementById('mainMenu').style.display = 'flex'; // 确保主菜单使用 flex 布局
}

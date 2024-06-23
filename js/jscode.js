var value = [];
function checkform()
{
        const StudentnamenameInput = document.querySelector('input[name="Studentname"]');
        const ParentsnameInput = document.querySelector('input[name="Parentsname"]');
        const telephoneInput = document.querySelector('input[name="telephone"]');          
        if (StudentnamenameInput.value.trim() === ''|| ParentsnameInput.value.trim()==''||telephoneInput.value.trim() == '' ) {
            alert('不能提交为空，请输入姓名及电话号码!');
            return;
        }
        // 进行手机号码格式验证，例如使用正则表达式
        const telephoneInputPattern =/^[0-9]+$/;
        if (!telephoneInputPattern.test(telephoneInput.value)) {
            alert('请输入有效的电话号码');
            return;
        }
        if(!checkAtLeastOneCheckbox())
        {
            alert('请至少选择一门课程');
            return;
        }  
        alert('报名成功');
        console.log('报名人名字：'+ParentsnameInput.value.trim()+','+StudentnamenameInput.value.trim()+'；电话：'+telephoneInput.value.trim()+'；选中的选项:', value);
        value = [];
}
       //检查选择框
        function checkAtLeastOneCheckbox() {
            // 获取所有复选框元素
            const checkboxes = document.querySelectorAll('#optionForm input[type="checkbox"]');   
            // 检查是否至少有一个复选框被选中
            const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
            // 如果至少有一个复选框被选中，则继续执行相关逻辑
            const selectedOptions = [];
            if (atLeastOneChecked) {
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        selectedOptions.push(checkbox.nextElementSibling.textContent.trim());
                    }
                });
                value=selectedOptions;      
                return true;
            } else {
                // 如果没有复选框被选中
                return false;
            }
        }
       
     

      
/**
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 * ----------------------------------------------
 * @describe: 工具处理类
 */

export default function main() {
    return {

        // 模版替换
        tempReplacement: (temp, par, str) => {
            let re = new RegExp('{{' + par + '}}',"g");
            return temp.replace(re, str);
        },
    };
}
#!/usr/bin/env node

const clone = require('git-clone')
const program = require('commander')
const shell = require('shelljs');
const log = require('tracer').colorConsole()


program
    .version('1.0.0')
    .description('xserver�м��Ӧ��ģ�幤�̵�cli')
program
    .command('* <tpl> <project>')
    .action(function(tpl, project) {
        log.info('Ŀǰxserver-cli֧������ģ�壺')
        log.info('ʹ�����ӣ�x-cli x-express myproject')
        if (tpl && project) {
            let pwd = shell.pwd()
            log.info(`������ȡģ����룬����λ�ã�${pwd}/${project}/ ...`)
            clone(`https://github.com/cheneyweb/${tpl}.git`, pwd + `/${project}`, null, function() {
                shell.rm('-rf', pwd + `/${project}/.git`)
                log.info('ģ�幤�̽������')
            })
        } else {
            log.error('��ȷ�������ӣ�x-cli x-express myproject')
        }
    })
program.parse(process.argv)

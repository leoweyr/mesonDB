import os

#统一性操作
def testDir(dirName):
    # 检测文件结构函数
    test = os.path.exists(dirName)
    if test == False:
        os.mkdir(dirName)

#针对性操作
def operate_testDir():
    #检测主要目录
    testDir("database")
    testDir("config")
def operate_datebaseList(database):
    #数据库记录
    open("config/datebaseList.config","w")
    f = open("config/databaseList.config","a")
    f.write(str(database))


#数据库操作（主程序）
def connect(database):
    #连接数据库
    #检测
    operate_testDir()
    testDir("database/" + database)
    operate_datebaseList(database)
    def table(table):
        open("database/" + database + table +".mdb","w")
        def insert(data):
            f = open("database/" + database + table +".mdb","a")
            f.write(str(data) + "/n")








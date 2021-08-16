import os
import datetime

#统一性操作
def testDir(dirName):
    # 检测文件结构函数
    test = os.path.exists(dirName)
    if test == False:
        os.mkdir(dirName)

#针对性操作
def operate_testDir_default():
    #检测主要目录
    testDir("mesonDB/database")
    testDir("mesonDB/config")
def operate_datebaseList(database):
    #数据库记录
    open("mesonDB/config/datebaseList.config","w")
    f = open("mesonDB/config/databaseList.config","a")
    f.write(str(database) + "/n")

#调式操作
def timeSignINFO():
    #时间标记器
    main = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return "[" + main + " INFO]"

version = timeSignINFO() + "meson当前版本为0.1.0"

#主要操作
class connect_default:
    #连接数据库（默认配置）
    def __init__(self,database):
        operate_testDir_default()
        self.database = database
        testDir("mesonDB/database/" + self.database)
        operate_datebaseList(self.database)

    def table(self,db_table):
        self.table = db_table
        open("mesonDB/database/" + self.database + "/" + self.table +".mdb","w")

    def insert(self,data):
        f = open("mesonDB/database/" + self.database + "/"+ self.table +".mdb","a")
        f.write(str(data) + "\n")





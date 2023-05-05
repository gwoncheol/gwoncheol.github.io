public boolean mCheck(String uid, String pass) throws SQLException { 
    boolean flag=false; 
    PreparedStatement pstmt=null; 
    ResultSet rs=null; 
    try{ 
        con = DbCon.getConnection(); //DB POOL 
        pstmt = con.prepareStatement("select * from member where memberld=?"); 
        pstmt.setString(1, uid); 
        rs=pstmt.executeQuery();
rs.next(); 
if(uid.equals(rs.getString("memberld").trim()) && pass.equals(rs.getString("memberPasswd").trim())) 
{
    flag=true; 
    mname = rs.getString("memberName").trim(); 
} else { 
    flag=false; } 
} catch(Exception e) {
e.printStackTrace(); 
} finally{ 
    try { con.close(); pstmt.close(); 
    } catch(Exception e) { 
        e.printStackTrace();} 
    }
    return flag
}

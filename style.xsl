<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
  <center>
      <h2>BOOKSTORE</h2>
    <table border="1" height = "350">
      <tr bgcolor="#9acd32">
        <th>Category</th>
        <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Price</th>
      </tr>
      <xsl:for-each select="bookstore/book">
      <xsl:sort select="year"/>
        <tr>
          <td><xsl:value-of select="@category"/></td>
          <td width = "150"><xsl:value-of select="title"/></td>
            <td width = "200"><xsl:value-of select="author"/></td>
            <td width = "50"><xsl:value-of select="year"/></td>
            <td width = "80"><xsl:value-of select="price"/></td>
        </tr>
      </xsl:for-each>
    </table>
    </center>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>
